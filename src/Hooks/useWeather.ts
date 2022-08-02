import { useEffect, useState } from 'react'
import { Coordinates } from '../Core/dtos/OpenWeatherResponseDTO'
import { WeatherService } from '../Core/services/openWeather'
import { useCoordinates } from './useCoordinates'

export const useWeather = (locationName: string) => {
  const [loading, setLoading] = useState(false)
  const [weather, setWeather] = useState({})
  const [forecastWeather, setForecastWeather] = useState<any>([])
  const { coordinates } = useCoordinates()

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

  useEffect(() => {
    if (coordinates) {
      fetchForecastWeather(coordinates)
    }
  }, [coordinates])

  return {
    loading,
    weather,
    fetchWeather,
    fetchForecastWeather,
    forecastWeather
  }
}
