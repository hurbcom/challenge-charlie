import { AxiosRequestConfig } from 'axios'

export interface IHttpClient {
  get<T>(url: string, params?: AxiosRequestConfig): Promise<T>
}
