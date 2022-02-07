import React from 'react'
import { WeatherHeader } from './WeatherHeader'
import { WeatherToday } from './WeatherToday'
import { WeatherTomorrow, WeatherAfterTomorrow } from './WeatherAnotherDay'

const WeatherForecast = ({ location, today, tomorrow, afterTomorrow }) => {
  return (
    <div style={{ maxWidth: 400 }}>
      <WeatherHeader city={location.city} state={location.state} />
      <WeatherToday {...today} />
      <WeatherTomorrow {...tomorrow} />
      <WeatherAfterTomorrow {...afterTomorrow} />
    </div>
  )
}

export default WeatherForecast
