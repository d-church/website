import type { Language } from "@/types";

export abstract class ApiService {
  protected baseURL: string =
    process.env.NEXT_PUBLIC_API_URL || "https://api-dev.dchurch.lviv.ua";

  protected async request<T>(
    endpoint: string,
    config: ApiConfig
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...(config.headers as Record<string, string>),
    };

    if (config.language && !headers["x-locale"]) {
      headers["x-locale"] = config.language;
    }

    const fetchOptions: RequestInit = {
      method: config.method || "GET",
      headers,
      ...config.fetchOptions,
    };

    if (config.data && (config.method === "POST" || config.method === "PATCH" || config.method === "PUT")) {
      fetchOptions.body = JSON.stringify(config.data);
    }

    const response = await fetch(url, fetchOptions);
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  protected async get<T>(endpoint: string, config: ApiConfig): Promise<T> {
    return this.request<T>(endpoint, { ...config, method: "GET" });
  }

  protected async post<T>(
    endpoint: string,
    data: unknown,
    config: ApiConfig
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...config,
      method: "POST",
      data,
    });
  }

  protected async patch<T>(
    endpoint: string,
    data: unknown,
    config: ApiConfig
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...config,
      method: "PATCH",
      data,
    });
  }

  protected async put<T>(
    endpoint: string,
    data: unknown,
    config: ApiConfig
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...config,
      method: "PUT",
      data,
    });
  }

  protected async delete<T>(endpoint: string, config: ApiConfig): Promise<T> {
    return this.request<T>(endpoint, { ...config, method: "DELETE" });
  }
}

export interface ApiConfig {
  language: Language;
  headers?: HeadersInit;
  method?: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
  data?: unknown;
  fetchOptions?: RequestInit & {
    next?: {
      revalidate?: number | false;
      tags?: string[];
    };
    cache?: RequestCache;
  };
}
