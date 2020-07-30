import { useEffect, useState } from 'react'
import { OpenWeatherService } from 'services/openWeatherService'

function useWeather({ city }) {
  const [weather, setWeather] = useState()
  const [forecasts, setForecasts] = useState()

  useEffect(() => {
    if (city) {
      setForecasts(null)
      setWeather(null)

      const openWeatherServiceInstance = new OpenWeatherService({ city })

      openWeatherServiceInstance.getWeather().then(setWeather)
      openWeatherServiceInstance.getForecasts().then(setForecasts)
    }
  }, [city])

  return {
    forecasts,
    setForecasts,
    setWeather,
    weather,
  }
}

export default useWeather
