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
  opacity: number
}

const WeatherAnotherDay = ({
  dayLabel,
  temperature,
  lightnessLevel,
  opacity,
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
        <Temperature>{temperature}</Temperature>
      </WeatherAnotherDayBox>
    </WeatherAnotherDayContainer>
  )
}

export const WeatherTomorrow = ({ temperature }: WeatherTomorrowProps) => (
  <WeatherAnotherDay
    dayLabel="Amanhã"
    temperature={temperature}
    lightnessLevel={1}
    opacity={0.95}
  />
)

export const WeatherAfterTomorrow = ({ temperature }: WeatherTomorrowProps) => (
  <WeatherAnotherDay
    dayLabel="Depois de amanhã"
    temperature={temperature}
    lightnessLevel={2}
    opacity={0.97}
  />
)

export default WeatherAnotherDay
