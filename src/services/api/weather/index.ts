import Axios from 'axios'
import { WeatherDto } from './types'

const axios = Axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/'
})

const KEY_WEATHER = '7ba73e0eb8efe773ed08bfd0627f07b8'

const show = (params: { q: string }) =>
  axios.get<WeatherDto>('weather', {
    params: { ...params, APPID: KEY_WEATHER }
  })
export const WeatherApi = { show }
