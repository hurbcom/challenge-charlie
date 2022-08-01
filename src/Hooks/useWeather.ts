import { useEffect, useState } from 'react'
import { Coordinates } from '../Core/dto/OpenWeatherResponseDTO'
import { WeatherService } from '../Core/services/openWeather'

export const useWeather = (locationName: string) => {
  const [loading, setLoading] = useState(false)
  const [weather, setWeather] = useState({})
  const [forecastWeather, setForecastWeather] = useState({})

  const fetchForecastWeather = (coordinates: Coordinates) => {
    setLoading(true)
    return WeatherService.getForecastWeather(coordinates)
      .then(setForecastWeather)
      .finally(() => setLoading(false))
  }

  const fetchWeather = () => {
    setLoading(true)
    return WeatherService.getWeather(locationName)
      .then((response) => {
        setWeather(response)
        fetchForecastWeather(response)
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchWeather()
  }, [locationName])

  return {
    loading,
    weather,
    fetchWeather,
    fetchForecastWeather,
    forecastWeather
  }
}
