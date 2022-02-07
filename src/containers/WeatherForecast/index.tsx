import React from 'react'
import { WeatherForecast as WeatherForecastUI } from '../../components'

const WeatherForecast = () => {
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
    <WeatherForecastUI
      cityName="Rio de Janeiro"
      stateName="Rio de Janeiro"
      today={today}
      tomorrow={tomorrow}
      afterTomorrow={afterTomorrow}
    />
  )
}

export default WeatherForecast
