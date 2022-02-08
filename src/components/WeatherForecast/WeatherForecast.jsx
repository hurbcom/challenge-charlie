import React from 'react'
import { WeatherHeader } from './WeatherHeader'
import { WeatherToday } from './WeatherToday'
import { WeatherTomorrow, WeatherAfterTomorrow } from './WeatherAnotherDay'
import { WeatherContainer } from './WeatherContainer'

const WeatherForecast = ({
  location,
  today,
  tomorrow,
  afterTomorrow,
  measurementUnit,
  onMeasurementUnitChange,
}) => {
  return (
    <WeatherContainer>
      <WeatherHeader city={location.city} state={location.state} />
      <WeatherToday
        {...today}
        measurementUnit={measurementUnit}
        onMeasurementUnitChange={onMeasurementUnitChange}
      />
      <WeatherTomorrow
        {...tomorrow}
        measurementUnit={measurementUnit}
        onMeasurementUnitChange={onMeasurementUnitChange}
      />
      <WeatherAfterTomorrow
        {...afterTomorrow}
        measurementUnit={measurementUnit}
        onMeasurementUnitChange={onMeasurementUnitChange}
      />
    </WeatherContainer>
  )
}

export default WeatherForecast
