import React from 'react'
import { Main, WeatherForecast as WeatherForecastUI } from '../../components'
import { useLocation } from '../../hooks'
import { Weather } from '../../services'
import { getWeatherReturn } from '../../types/weather'
import { mapTodayWeatherDataToProp } from '../../helpers/weather'

export type positionProps = {
  latitude: number
  longitude: number
}

const WeatherForecast = () => {
  const location = useLocation()
  const [todayWeather, setTodayWeather] =
    React.useState<getWeatherReturn | null>(null)

  React.useEffect(() => {
    const city = location && location.data?.city
    ;(async () => {
      try {
        if (city) {
          const result = await Weather.getTodayForecast(city)
          const mappedWeather = mapTodayWeatherDataToProp(result)
          setTodayWeather(mappedWeather)
        }
      } catch (e) {
        console.error({ e })
      }
    })()
  }, [location])

  const tomorrow = {
    temperature: 15,
  }
  const afterTomorrow = {
    temperature: 15,
  }

  return (
    <Main>
      <WeatherForecastUI
        location={location.data}
        today={todayWeather}
        tomorrow={tomorrow}
        afterTomorrow={afterTomorrow}
      />
    </Main>
  )
}

export default WeatherForecast
