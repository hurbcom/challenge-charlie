import { TEMPERATURE_UNITS_NAMES } from '@/common'
import { IHttpClient } from '@/interfaces'
import { getShadeClassName } from '../forecast-domain/get-day-shade-classname'

import { getForecast } from '../forecast-domain/get-forecast'
import { getGeolocation } from '../forecast-domain/get-geolocation'
import {
  getCelsiusTemperatureColorClassName,
  getFahrenheitTemperatureColorClassName,
} from '../forecast-domain/get-temperature-color-classname'

export class ForecastDomain {
  private forecastApi: IHttpClient
  private geoLocationApi: IHttpClient

  constructor({
    forecastApi,
    geoLocationApi,
  }: {
    forecastApi: IHttpClient
    geoLocationApi: IHttpClient
  }) {
    this.forecastApi = forecastApi
    this.geoLocationApi = geoLocationApi
  }

  async getForecast(query: string) {
    const cleanQuery = query.trim()

    if (!cleanQuery) return null

    return getForecast({ forecastApi: this.forecastApi })
  }

  async getGeoLocation(query: string) {
    return getGeolocation({ geoLocationApi: this.geoLocationApi, query })
  }

  getClassName(day: string, temperature: number | null, unit: string) {
    const prefix = getShadeClassName(day)

    if (unit === TEMPERATURE_UNITS_NAMES.CELSIUS)
      return `${prefix}-${getCelsiusTemperatureColorClassName(temperature)}`

    return `${prefix}-${getFahrenheitTemperatureColorClassName(temperature)}`
  }
}
