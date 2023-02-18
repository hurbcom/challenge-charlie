import { TEMPERATURE_UNITS_NAMES } from '@/common'
import { IHttpClient } from '@/interfaces'
import { getShadeClassName } from '../forecast-domain/get-day-shade-classname'

import { searchGeoLocation } from './search-geolocation'
import {
  getCelsiusTemperatureColorClassName,
  getFahrenheitTemperatureColorClassName,
} from '../forecast-domain/get-temperature-color-classname'
import { getUserCurrentLocation } from './get-user-current-location'
import { getForecast } from './get-forecast'

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

  private getForecast = async (query: string) => {
    const geolocation = await searchGeoLocation({
      geoLocationApi: this.geoLocationApi,
      query,
    })

    if (!geolocation) return null

    const { latitude, longitude } = geolocation

    const forecast = await getForecast({
      forecastApi: this.forecastApi,
      latitude,
      longitude,
    })

    return {
      ...forecast,
      geolocation,
    }
  }

  getForecastByQuery = async (query: string) => {
    const cleanQuery = query.trim()

    if (!cleanQuery) return null

    return this.getForecast(query)
  }

  async getForecastByGeolocation(latitude?: number, longitude?: number) {
    if (!latitude || !longitude) return null

    const query = `${latitude},${longitude}`

    return this.getForecast(query)
  }

  async getUserCurrentLocation() {
    return getUserCurrentLocation({ navigator })
  }

  getClassName(day: string, temperature: number | null, unit: string) {
    const prefix = getShadeClassName(day)

    if (unit === TEMPERATURE_UNITS_NAMES.CELSIUS)
      return `${prefix}-${getCelsiusTemperatureColorClassName(temperature)}`

    return `${prefix}-${getFahrenheitTemperatureColorClassName(temperature)}`
  }
}
