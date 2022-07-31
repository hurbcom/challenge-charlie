import { slice } from '../../Common-functions/functions/array'
import { OpenWeatherResponseDTO, OpenWeatherForecastResponseDTO } from '../dto/OpenWeatherResponseDTO'

export const OpenWeatherParser = (data: OpenWeatherResponseDTO) => {
  const { main: { temp: celsiusTemperature } } = data

  return celsiusTemperature
}

export const OpenWeatherForecastParser = (data: OpenWeatherForecastResponseDTO) => {
  const { current, daily } = data

  const forecast = slice(daily, 0, 2)

  return [current, ...forecast]
}
