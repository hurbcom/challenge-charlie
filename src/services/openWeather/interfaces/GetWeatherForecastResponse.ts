import { WeatherForecastIconEnum } from '../enums/WeatherForecastIconEnum'

export interface GetWeatherForecastResponse {
  list: Weather[]
}

export interface Weather {
  main: {
    temp: number
    humidity: number
    pressure: number
  }
  weather: [
    {
      description: string
      icon: WeatherForecastIconEnum
    }
  ]
  wind: {
    speed: number
  }
}
