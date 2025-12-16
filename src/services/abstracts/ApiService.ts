import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";

import type { Language } from "@/types";

abstract class ApiService {
  protected api: AxiosInstance = axios.create({
    baseURL:
      process.env.NEXT_PUBLIC_API_URL || "https://api-dev.dchurch.lviv.ua",
  });

  constructor() {
    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    this.api.interceptors.request.use(
      (config: any) => {
        /*
         * Add language header from config if provided
         */
        if (config.language && !config.headers["x-locale"]) {
          config.headers["x-locale"] = config.language;
        }

        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    this.api.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );
  }
}

export interface ApiConfig extends AxiosRequestConfig {
  language: Language;
}

export default ApiService;
