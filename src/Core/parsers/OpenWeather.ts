/* eslint-disable camelcase */
import { head, slice, tail } from '../../Common-functions/functions/array'
import { degToCompass, metersPerSecondToKilometersPerHour } from '../../Common-functions/functions/metricConvertion'
import { capitalizeFirstLetter } from '../../Common-functions/functions/stringFormat'
import { OpenWeatherResponseDTO, OpenWeatherForecastResponseDTO, DailyForecastWeather } from '../dtos/OpenWeatherResponseDTO'

export const OpenWeatherParser = (data: OpenWeatherResponseDTO) => {
  const { coord: coordinates } = data

  return coordinates
}

const forecastParser = (forecast: DailyForecastWeather) => {
  const { temp, weather, wind_speed, humidity, pressure } = forecast
  const { description, main } = head(weather)

  return {
    temperature: Math.round(temp?.day),
    description,
    main,
    windSpeed: wind_speed,
    humidity,
    pressure
  }
}

export const OpenWeatherForecastParser = (data: OpenWeatherForecastResponseDTO) => {
  const { current, daily } = data

  const { temp, weather, wind_speed, wind_deg, humidity, pressure } = current
  const { description, main } = head(weather)

  const forecast = slice(daily, 0, 2)

  return {
    todayWeather: {
      temperature: Math.round(temp),
      description: capitalizeFirstLetter(description),
      main,
      windSpeed: metersPerSecondToKilometersPerHour(wind_speed),
      windPosition: degToCompass(wind_deg),
      humidity,
      pressure
    },
    tomorrowWeather: forecastParser(head(forecast)),
    afterTomorrowWeather: forecastParser(tail(forecast))
  }
}
