import { OpenWeatherParser } from '../parsers/OpenWeather'

const { REACT_APP_OPEN_WEATHER_API_URL, REACT_APP_OPEN_WEATHER_KEY } = process.env

export const getWeather = (): Promise<number> =>
  fetch(`${REACT_APP_OPEN_WEATHER_API_URL}/data/2.5/weather?q=london&APPID=${REACT_APP_OPEN_WEATHER_KEY}`)
    .then(res => res.json())
    .then(OpenWeatherParser)
