import React from 'react'
import { useBackgroundColor } from '../../../hooks/useBackgroundColor'
import {
  WeatherAnotherDayContainer,
  WeatherAnotherDayBox,
  Day,
  Temperature,
} from './WeatherAnotherDay.styles'
import { mapTemperatureUnit } from '../../../helpers/weather'

interface WeatherTomorrowProps {
  temperature: number
  measurementUnit: string
  onMeasurementUnitChange: Function
}

interface WeatherAnotherDayProps extends WeatherTomorrowProps {
  dayLabel: string
  lightnessLevel: number
  opacity: number
}

const WeatherAnotherDay = ({
  dayLabel,
  temperature,
  lightnessLevel,
  opacity,
  measurementUnit,
  onMeasurementUnitChange,
}: WeatherAnotherDayProps) => {
  const backgroundColor = useBackgroundColor(
    'celsius',
    temperature,
    lightnessLevel,
    opacity
  )
  return (
    <WeatherAnotherDayContainer backgroundColor={backgroundColor}>
      <WeatherAnotherDayBox></WeatherAnotherDayBox>
      <WeatherAnotherDayBox>
        <Day>{dayLabel.toUpperCase()}</Day>
        <Temperature onClick={onMeasurementUnitChange}>
          {mapTemperatureUnit(temperature, measurementUnit)}
        </Temperature>
      </WeatherAnotherDayBox>
    </WeatherAnotherDayContainer>
  )
}

export const WeatherTomorrow = ({
  temperature,
  onMeasurementUnitChange,
  measurementUnit,
}: WeatherTomorrowProps) => (
  <WeatherAnotherDay
    dayLabel="Amanhã"
    temperature={temperature}
    lightnessLevel={1}
    opacity={0.95}
    measurementUnit={measurementUnit}
    onMeasurementUnitChange={onMeasurementUnitChange}
  />
)

export const WeatherAfterTomorrow = ({
  temperature,
  onMeasurementUnitChange,
  measurementUnit,
}: WeatherTomorrowProps) => (
  <WeatherAnotherDay
    dayLabel="Depois de amanhã"
    temperature={temperature}
    lightnessLevel={2}
    opacity={0.97}
    measurementUnit={measurementUnit}
    onMeasurementUnitChange={onMeasurementUnitChange}
  />
)

export default WeatherAnotherDay
