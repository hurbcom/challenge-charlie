/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import fetch from 'node-fetch'
import { createSuccessServiceResult, ServiceResult } from '../../infrastructure/create-service-result'
import { Weather, Location } from './weather.types'
import mapper from './weather.mapper'

const openCageUrl = `${process.env.OPENCAGE_URL}?key=${process.env.OPENCAGE_KEY}&q=`

enum Services {
  Weather = '/weather',
  Forecast = '/forecast',
}

function getOpenWeatherUrl(service: Services, query?: string) {
  return `${process.env.OPENWEATHER_URL}${service}?units=metric&appid=${process.env.OPENWEATHER_APPID}`
    + `&q=${query}`
}

export default {
  getByCity: async (city: string): Promise<ServiceResult<Weather[]>> => {
    const responseWeather = await fetch(getOpenWeatherUrl(Services.Weather, city))
    const responseForecast = await fetch(getOpenWeatherUrl(Services.Forecast, city))

    const dataWeather = await responseWeather.json()
    const dataForecast = await responseForecast.json()
    const weather = mapper.mapWeatherAndForecast(dataWeather, dataForecast)

    return createSuccessServiceResult<Weather[]>(weather)
  },

  getCityByLatitudeAndLongitude: async (latitude: number, longitude: number)
  : Promise<ServiceResult<Location>> => {
    const response = await fetch(`${openCageUrl + latitude},${longitude}`)
    const data = await response.json()
    const location = mapper.mapLocation(data)

    return createSuccessServiceResult<Location>(location)
  },
}
