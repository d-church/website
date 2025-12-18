import type { AxiosRequestConfig } from "axios";

import ApiService, { type ApiConfig } from "./ApiService";

abstract class RestService<T> extends ApiService {
  protected abstract anchor: string;

  public async getAll(config: ApiConfig): Promise<T[]> {
    const response = await this.api.get<T[]>(this.anchor, {
      language: config.language,
    } as ApiConfig);

    return response.data;
  }

  public async get(id: string, config: ApiConfig): Promise<T> {
    const response = await this.api.get<T>(`${this.anchor}/${id}`, {
      language: config.language,
    } as ApiConfig);
    return response.data;
  }

  public async delete(id: string, config: ApiConfig): Promise<T> {
    const response = await this.api.delete<T>(`${this.anchor}/${id}`, {
      language: config.language,
    } as ApiConfig);
    return response.data;
  }

  public async update(
    id: string,
    data: Partial<T>,
    config: ApiConfig
  ): Promise<T> {
    const response = await this.api.patch<T>(`${this.anchor}/${id}`, data, {
      language: config.language,
    } as ApiConfig);
    return response.data;
  }

  public async create(data: Partial<T>, config: ApiConfig): Promise<T> {
    const response = await this.api.post<T>(this.anchor, data, {
      language: config.language,
    } as ApiConfig);
    return response.data;
  }
}

export default RestService;
