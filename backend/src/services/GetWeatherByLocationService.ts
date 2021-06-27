import { GetWeatherByLocationResponse } from '@interfaces/GetWeatherByLocationResponse'
import HttpException from '@libraries/HttpException'
import OpenCageAPI from '@libraries/OpenCageAPI'
import OpenWeatherAPI from '@libraries/OpenWeatherAPI'

type Params = {
  latitude?: number;
  longitude?: number;
  cityName?: string;
}

class GetWeatherByLocationService {
  private openWeatherAPI: OpenWeatherAPI
  private openCageAPI: OpenCageAPI

  public weather: GetWeatherByLocationResponse

  constructor (
    openWeatherAPI: OpenWeatherAPI,
    openCageAPI: OpenCageAPI
  ) {
    this.openWeatherAPI = openWeatherAPI
    this.openCageAPI = openCageAPI

    this.weather = {
      city: '',
      state: '',
      latitude: 0,
      longitude: 0,
      weatherByDays: []
    }
  }

  public async execute ({
    longitude,
    latitude,
    cityName
  }: Params) {
    if (
      !longitude &&
      !latitude &&
      !cityName
    ) {
      throw new HttpException(400, 'cityName or (latitude and longitude) was not informed')
    }

    const openCageResponse = await this.openCageAPI.getWeatherByLocation({
      longitude,
      latitude,
      cityName
    })

    if (!openCageResponse.results.length) {
      throw new HttpException(400, 'location not found')
    }

    const { geometry, components } = openCageResponse.results[0]

    this.weather = {
      city: components.city,
      state: components.state,
      latitude: geometry.lat,
      longitude: geometry.lng,
      weatherByDays: []
    }

    const openWeatherResponse = await this.openWeatherAPI.getWeatherByCoordinates({
      latitude: this.weather.latitude,
      longitude: this.weather.longitude
    })

    if (!openWeatherResponse.daily.length) {
      throw new HttpException(400, 'weather not found')
    }

    const [
      today,
      tomorrow,
      afterTomorrow
    ] = openWeatherResponse.daily

    this.weather.weatherByDays.push({
      classification: String(today.weather[0].main),
      temperatureInFahrenheit: Number(today.temp.day),
      windSpeedInMetersBySecond: Number(today.wind_speed),
      windDirectionInAzimuthDegrees: Number(today.wind_deg),
      humidity: Number(today.humidity),
      pressure: Number(today.pressure)
    })

    this.weather.weatherByDays.push({
      classification: String(tomorrow.weather[0].main),
      temperatureInFahrenheit: Number(tomorrow.temp.day),
      windSpeedInMetersBySecond: Number(tomorrow.wind_speed),
      windDirectionInAzimuthDegrees: Number(tomorrow.wind_deg),
      humidity: Number(tomorrow.humidity),
      pressure: Number(tomorrow.pressure)
    })

    this.weather.weatherByDays.push({
      classification: String(afterTomorrow.weather[0].main),
      temperatureInFahrenheit: Number(afterTomorrow.temp.day),
      windSpeedInMetersBySecond: Number(afterTomorrow.wind_speed),
      windDirectionInAzimuthDegrees: Number(afterTomorrow.wind_deg),
      humidity: Number(afterTomorrow.humidity),
      pressure: Number(afterTomorrow.pressure)
    })

    return this.weather
  }
}

export default GetWeatherByLocationService
