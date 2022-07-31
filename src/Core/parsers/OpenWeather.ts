import { kelvinToCelsius } from '../../Common-functions'
import { OpenWeatherResponseDTO } from '../dto/OpenWeatherResponseDTO'

export const OpenWeatherParser = (data: OpenWeatherResponseDTO) => {
  const { main: { temp } } = data
  const celsiusTemperature = kelvinToCelsius(temp)

  return celsiusTemperature
}
