import { ForecastApi } from '@/config/axios'
import { IHttpClient } from '@/interfaces'
import { AxiosRequestConfig } from 'axios'

export class ForecastApiClient implements IHttpClient {
  async get<T>(url: string, params?: AxiosRequestConfig): Promise<T> {
    const result = await ForecastApi.get<T>(url, params)

    return result.data
  }
}
