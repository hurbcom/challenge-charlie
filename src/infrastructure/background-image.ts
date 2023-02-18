import { BingApi } from '@/config/axios'
import { IHttpClient } from '@/interfaces'
import { AxiosRequestConfig } from 'axios'

const { BING_API_URL } = process.env

export class BackgroundImageApiClient implements IHttpClient {
  async get<T>(url: string, params?: AxiosRequestConfig): Promise<T> {
    const requestUrl = `${BING_API_URL}/${url}`

    const URL = `http://api.allorigins.win/get?url=${encodeURIComponent(
      requestUrl
    )}`

    const result = await BingApi.get<T>(URL, params)

    return result.data
  }
}
