import { Coordinates } from '../dtos/OpenWeatherResponseDTO'
import { OpenWeatherForecastParser, OpenWeatherParser } from '../parsers/OpenWeather'

const { REACT_APP_OPEN_WEATHER_API_URL, REACT_APP_OPEN_WEATHER_KEY } = process.env

export const WeatherService = {
  getWeather (locationName: string): Promise<Coordinates> {
    return fetch(`${REACT_APP_OPEN_WEATHER_API_URL}/data/2.5/weather?q=${locationName}&APPID=${REACT_APP_OPEN_WEATHER_KEY}&units=metric`)
      .then(res => res.json())
      .then(OpenWeatherParser)
  },
  getForecastWeather ({ lat, lon }: Coordinates): Promise<any> {
    return fetch(`${REACT_APP_OPEN_WEATHER_API_URL}/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&appid=${REACT_APP_OPEN_WEATHER_KEY}&units=metric&lang=pt`)
      .then(res => res.json())
      .then(OpenWeatherForecastParser)
  }
}
