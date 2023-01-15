import { WeatherForecastUnitsEnum } from '../enums/WeatherForecastUnitsEnum'

export interface GetWeatherForecastParams {
  address: string
  units?: WeatherForecastUnitsEnum
}
