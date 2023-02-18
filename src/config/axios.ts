import axios from 'axios'

const { OPENCAGE_KEY, OPENCAGE_URL, OPEN_WEATHER_KEY, OPEN_WEATHER_URL } =
  process.env

export const ForecastApi = axios.create({
  baseURL: OPEN_WEATHER_URL,
  params: {
    appid: OPEN_WEATHER_KEY,
  },
})

export const BingApi = axios.create()

export const OpenCageApi = axios.create({
  baseURL: OPENCAGE_URL,
  params: {
    key: OPENCAGE_KEY,
  },
})
