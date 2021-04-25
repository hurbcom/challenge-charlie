import axios from 'axios'
import { GlobalContextType } from '../src/common/types/globalContext'

declare global {
  interface Window {
    dataContext: GlobalContextType
  }
}

const getWeather = (location: string) => {
  window.dataContext = window.dataContext || {}

  const apiOpenWeather = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=7ba73e0eb8efe773ed08bfd0627f07b8`
  return axios.get(apiOpenWeather).then((res) => {
    console.log('PASSOU AQUI')
    return (window.dataContext = {
      info: { ...res.data.city },
      weatherPerDay: [{ ...res.data.list[0] }, { ...res.data.list[8] }, { ...res.data.list[16] }],
    })
  })
}

export default getWeather
