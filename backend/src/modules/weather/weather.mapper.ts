import timestamp from 'unix-timestamp'
import { degreesToCompass } from '../../infrastructure/direction-compass'
import { translateWeather } from '../../infrastructure/translator'
import { DayTypes, Location, Weather } from './weather.types'

const forecastTomorrowIndex = 4
const forecastAfterTomorrowIndex = 9

export default {
  mapWeatherAndForecast: (dataWeather, dataForecast) => {
    const today = {
      day: DayTypes.Today,
      date: timestamp.toDate(dataWeather.dt).toString(),
      description: translateWeather(dataWeather.weather[0].main),
      icon: `${dataWeather.weather[0].icon}`,
      temperature: dataWeather.main.temp,
      humidity: dataWeather.main.humidity,
      pressure: dataWeather.main.pressure,
      windSpeed: dataWeather.wind.speed,
      windDirection: degreesToCompass(dataWeather.wind.deg),
    } as Weather

    const forecastTomorrow = dataForecast.list[forecastTomorrowIndex]
    const tomorrow = {
      day: DayTypes.Tomorrow,
      date: timestamp.toDate(forecastTomorrow.dt).toString(),
      description: translateWeather(forecastTomorrow.weather[0].main),
      icon: `${forecastTomorrow.weather[0].icon}`,
      temperature: forecastTomorrow.main.temp,
      humidity: forecastTomorrow.main.humidity,
      pressure: forecastTomorrow.main.pressure,
      windSpeed: forecastTomorrow.wind.speed,
      windDirection: degreesToCompass(forecastTomorrow.wind.deg),
    } as Weather

    const forecastAfterTomorrow = dataForecast.list[forecastAfterTomorrowIndex]
    const afterTomorrow = {
      day: DayTypes.AfterTomorrow,
      date: timestamp.toDate(forecastAfterTomorrow.dt).toString(),
      description: translateWeather(forecastAfterTomorrow.weather[0].main),
      icon: `${forecastAfterTomorrow.weather[0].icon}`,
      temperature: forecastAfterTomorrow.main.temp,
      humidity: forecastAfterTomorrow.main.humidity,
      pressure: forecastAfterTomorrow.main.pressure,
      windSpeed: forecastAfterTomorrow.wind.speed,
      windDirection: degreesToCompass(forecastAfterTomorrow.wind.deg),
    } as Weather

    return [today, tomorrow, afterTomorrow] as Weather[]
  },

  mapLocation: (location) => {
    const firstResult = location.results[0]

    return ({
      city: firstResult.components.city,
      state: firstResult.components.state_code,
      country: firstResult.components.country,
      latitude: firstResult.geometry.lat,
      longitude: firstResult.geometry.lng,
    } as Location)
  },

}
