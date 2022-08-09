import axios from "axios"

const key = '3305e7b2ee23952d5ef66a7ddd304272'
const baseUrl = 'https://api.openweathermap.org/data/2.5'

type getWeatherFromCityProps = {
  data: {
    main: {
      temp: string
    }
  }
}

export const getWeatherFromCity = (city: string): Promise<getWeatherFromCityProps> => {
  return axios.get(baseUrl + `/weather?q=${city}&appid=${key}`)
}

export const getWeatherFromLatAndLng = (lat: string, long: string) => {
  return baseUrl + `/weather?lat=${lat}&lon=${long}&appid=${key}`
}
