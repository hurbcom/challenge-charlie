import { useEffect, useState } from 'react'
import { OpenWeatherService } from 'services/openWeatherService'
import i18n from 'utils/i18n'

const limitOfDays = 2

const initialForecasts = Array(2).fill({
  description: '',
})

function useWeather({ city }) {
  const [error, setError] = useState()
  const [weather, setWeather] = useState()
  const [forecasts, setForecasts] = useState(initialForecasts)

  useEffect(() => {
    if (city) {
      setError(null)
      setForecasts(initialForecasts)
      setWeather(null)

      const openWeatherServiceInstance = new OpenWeatherService({ city })

      openWeatherServiceInstance
        .getWeather()
        .then(setWeather)
        .catch(errorMessage => setError(i18n(errorMessage)))

      openWeatherServiceInstance
        .getForecasts(limitOfDays)
        .then(setForecasts)
        .catch(() => setForecasts(initialForecasts))
    }
  }, [city])

  return {
    error,
    forecasts,
    setForecasts,
    setWeather,
    weather,
  }
}

export default useWeather
