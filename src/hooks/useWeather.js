import { useEffect, useState } from 'react'
import { OpenWeatherService } from 'services/openWeatherService'

function useWeather({ city }) {
  const [weather, setWeather] = useState()

  useEffect(() => {
    if (city) {
      new OpenWeatherService({ city }).getWeather().then(setWeather)
    }
  }, [city])

  return {
    setWeather,
    weather,
  }
}

export default useWeather
