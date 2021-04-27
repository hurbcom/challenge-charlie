import axios from 'axios'
import { GlobalContextType } from '../src/common/types/globalContext'

declare global {
  interface Window {
    error?: boolean
    dataContext: GlobalContextType
  }
}

const getWeather = (location: string) => {
  window.dataContext = window.dataContext || {}

  const apiOpenWeather = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&lang=pt_br&units=metric&APPID=d21491481037da4a3866cf08a46a4641`
  return axios
    .get(apiOpenWeather)
    .then((res) => {
      console.log('PASSOU AQUI')
      return [
        (window.error = false),
        (window.dataContext = {
          info: { ...res.data.city },
          weatherPerDay: [{ ...res.data.list[0] }, { ...res.data.list[8] }, { ...res.data.list[16] }],
        }),
      ]
    })
    .catch(() => {
      console.debug('[Error getWeather function]')
      return [(window.dataContext = {}), (window.error = true)]
    })
}

export default getWeather
