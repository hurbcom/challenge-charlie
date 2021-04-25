import { MainWeatherType } from './mainWeather'
import { WeatherType } from './weather'

export type DayType = {
  clouds: object
  main: MainWeatherType
  weather: Array<WeatherType>
  wind: {
    deg: number
    gust: number
    speed: number
  }
}
