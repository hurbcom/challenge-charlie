import React from 'react'
import { WeatherHeader } from './WeatherHeader'
import { WeatherToday } from './WeatherToday'
import { WeatherTomorrow, WeatherAfterTomorrow } from './WeatherAnotherDay'

const WeatherForecast = ({
  cityName,
  stateName,
  today,
  tomorrow,
  afterTomorrow,
}) => {
  return (
    <div styled={{ maxWidth: 400 }}>
      <WeatherHeader cityName={cityName} stateName={stateName} />
      <WeatherToday {...today} />
      <WeatherTomorrow {...tomorrow} />
      <WeatherAfterTomorrow {...afterTomorrow} />
    </div>
  )
}

export default WeatherForecast
