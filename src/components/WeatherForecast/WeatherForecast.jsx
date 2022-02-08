import React from 'react'
import { WeatherHeader } from './WeatherHeader'
import { WeatherToday } from './WeatherToday'
import { WeatherTomorrow, WeatherAfterTomorrow } from './WeatherAnotherDay'
import { WeatherContainer } from './WeatherContainer'

const WeatherForecast = ({ location, today, tomorrow, afterTomorrow }) => {
  return (
    <WeatherContainer>
      <WeatherHeader city={location.city} state={location.state} />
      <WeatherToday {...today} />
      <WeatherTomorrow {...tomorrow} />
      <WeatherAfterTomorrow {...afterTomorrow} />
    </WeatherContainer>
  )
}

export default WeatherForecast
