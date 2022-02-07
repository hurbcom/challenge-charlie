import React from 'react'
import { useBackgroundColor } from '../../../hooks/useBackgroundColor'
import {
  WeatherAnotherDayContainer,
  WeatherAnotherDayBox,
  Day,
  Temperature,
} from './WeatherAnotherDay.styles'

interface WeatherTomorrowProps {
  temperature: number
}

interface WeatherAnotherDayProps extends WeatherTomorrowProps {
  dayLabel: string
  lightnessLevel: number
}

const WeatherAnotherDay = ({
  dayLabel,
  temperature,
  lightnessLevel,
}: WeatherAnotherDayProps) => {
  const backgroundColor = useBackgroundColor(
    'celsius',
    temperature,
    lightnessLevel
  )
  const temperatureString = temperature.toString().toUpperCase()
  return (
    <WeatherAnotherDayContainer backgroundColor={backgroundColor}>
      <WeatherAnotherDayBox></WeatherAnotherDayBox>
      <WeatherAnotherDayBox>
        <Day>{dayLabel.toUpperCase()}</Day>
        <Temperature>{temperatureString}</Temperature>
      </WeatherAnotherDayBox>
    </WeatherAnotherDayContainer>
  )
}

export const WeatherTomorrow = ({ temperature }: WeatherTomorrowProps) => (
  <WeatherAnotherDay
    dayLabel="Amanhã"
    temperature={temperature}
    lightnessLevel={1}
  />
)

export const WeatherAfterTomorrow = ({ temperature }: WeatherTomorrowProps) => (
  <WeatherAnotherDay
    dayLabel="Depois de amanhã"
    temperature={temperature}
    lightnessLevel={2}
  />
)

export default WeatherAnotherDay
