import React from 'react'
import { Main, WeatherForecast as WeatherForecastUI } from '../../components'
import { useLocation } from '../../hooks'

export type positionProps = {
  latitude: number
  longitude: number
}

const WeatherForecast = () => {
  const location = useLocation()
  const today = {
    temperature: 30,
    dayFeeling: 'Ensolarado',
    windDirection: 'NO',
    windSpeed: '25km/h',
    airHumidity: '30%',
    airPressure: '10kpmhg',
  }
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
        today={today}
        tomorrow={tomorrow}
        afterTomorrow={afterTomorrow}
      />
    </Main>
  )
}

export default WeatherForecast
