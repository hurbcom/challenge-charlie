import axios from 'axios'

const {
  OPENCAGE_KEY,
  OPENCAGE_URL,
  OPEN_WEATHER_KEY,
  OPEN_WEATHER_URL,
  BING_API_URL,
} = process.env

export const ForecastApi = axios.create({
  baseURL: OPENCAGE_URL,
  params: {
    appid: OPEN_WEATHER_KEY,
  },
})

export const BingApi = axios.create({
  baseURL: BING_API_URL,
})

export const OpenCageApi = axios.create({
  baseURL: OPEN_WEATHER_URL,
  params: {
    key: OPENCAGE_KEY,
  },
})
