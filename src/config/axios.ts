import axios from 'axios'

export const ForecastApi = axios.create({
  baseURL: '',
  params: {
    appid: '',
  },
})

export const BingApi = axios.create({
  baseURL: '',
  params: {
    key: '',
  },
})

export const OpenCageApi = axios.create({
  baseURL: '',
  params: {
    key: '',
  },
})
