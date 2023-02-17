import { IHttpClient } from '@/interfaces'

import { getForecast } from './get-forecast'
import { getGeolocation } from './get-geolocation'

export class Domain {
  private forecastApi: IHttpClient
  private geoLocationApi: IHttpClient

  constructor(forecastApi: IHttpClient, geoLocationApi: IHttpClient) {
    this.forecastApi = forecastApi
    this.geoLocationApi = geoLocationApi
  }

  async getForecast() {
    return getForecast({ forecastApi: this.forecastApi })
  }

  async getGeoLocation(query: string) {
    return getGeolocation({ geoLocationApi: this.geoLocationApi, query })
  }
}
