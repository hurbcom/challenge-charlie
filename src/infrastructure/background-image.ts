import { BingApi } from '@/config/axios'
import { IHttpClient } from '@/interfaces'
import { AxiosRequestConfig } from 'axios'

export class BackgroundApiClient implements IHttpClient {
  async get<T>(url: string, params?: AxiosRequestConfig): Promise<T> {
    const result = await BingApi.get<T>(url, params)

    return result.data
  }
}
