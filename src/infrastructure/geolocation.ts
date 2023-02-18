import { OpenCageApi } from '@/config/axios'
import { IHttpClient } from '@/interfaces'
import { AxiosRequestConfig } from 'axios'

export class GeolocationApiClient implements IHttpClient {
  async get<T>(url: string, params?: AxiosRequestConfig): Promise<T> {
    const result = await OpenCageApi.get<T>(url, params)

    return result.data
  }
}
