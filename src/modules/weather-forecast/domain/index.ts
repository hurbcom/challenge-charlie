import { IHttpClient } from '@/interfaces'

import { getForecast } from './get-forecast'

export class Domain {
  private forecastApi: IHttpClient

  constructor(forecastApi: IHttpClient) {
    this.forecastApi = forecastApi
  }

  async getForecast() {
    return getForecast({ forecastApi: this.forecastApi })
  }
}
