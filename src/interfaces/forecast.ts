import { ICondition } from './condition'
import { ITemperature } from './temperature'
import { IWind } from './wind'

export interface IForecastDay {
  cod: string
  temperature: ITemperature
  pressure: number
  humidity: number
  speed: number
  wind: IWind
  condition: ICondition
}

export interface IForecast {
  today: IForecastDay
  tomorrow: IForecastDay
  dayAfterTomorrow: IForecastDay
}

export interface IForecastApiResponse {
  city: {
    id: number
    name: string
    coord: {
      lon: number
      lat: number
    }
  }
  cod: string
  cnt: number
  list: Array<{
    dt: number
    main: {
      temp: number
      pressure: number
      humidity: number
    }
    weather: Array<{
      id: number
      main: string
      description: string
      icon: string
    }>
    wind: {
      speed: number
      deg: number
    }
  }>
}
