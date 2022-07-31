import { DailyForecastWeather } from '../dto/OpenWeatherResponseDTO'
import { OpenWeatherForecastParser, OpenWeatherParser } from '../parsers/OpenWeather'

const { REACT_APP_OPEN_WEATHER_API_URL, REACT_APP_OPEN_WEATHER_KEY } = process.env

export const getWeather = (): Promise<number> =>
  fetch(`${REACT_APP_OPEN_WEATHER_API_URL}/data/2.5/weather?q=london&APPID=${REACT_APP_OPEN_WEATHER_KEY}`)
    .then(res => res.json())
    .then(OpenWeatherParser)

export const getForecastWeather = (): Promise<DailyForecastWeather[]> =>
  fetch(`${REACT_APP_OPEN_WEATHER_API_URL}/data/2.5/onecall?lat=-27.6146&lon=-48.5012&exclude=hourly,minutely,alerts&appid=${REACT_APP_OPEN_WEATHER_KEY}&units=metric&lang=pt`)
    .then(res => res.json())
    .then(OpenWeatherForecastParser)
