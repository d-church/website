import { ApiService, type ApiConfig } from "./api.service";

export abstract class RestService<T> extends ApiService {
  protected abstract anchor: string;

  public async getAll(config: ApiConfig): Promise<T[]> {
    return super.get<T[]>(this.anchor, config);
  }

  public async getById(id: string, config: ApiConfig): Promise<T> {
    return super.get<T>(`${this.anchor}/${id}`, config);
  }

  public async deleteById(id: string, config: ApiConfig): Promise<T> {
    return super.delete<T>(`${this.anchor}/${id}`, config);
  }

  public async update(
    id: string,
    data: Partial<T>,
    config: ApiConfig
  ): Promise<T> {
    return super.patch<T>(`${this.anchor}/${id}`, data, config);
  }

  public async create(data: Partial<T>, config: ApiConfig): Promise<T> {
    return super.post<T>(this.anchor, data, config);
  }
}
