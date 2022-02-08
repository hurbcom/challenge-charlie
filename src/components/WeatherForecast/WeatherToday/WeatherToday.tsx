import React from 'react'
import { ImSun } from 'react-icons/im'
import { IconContext } from 'react-icons'
import { useBackgroundColor } from '../../../hooks/useBackgroundColor'
import {
  WeatherTodayContainer,
  WeatherTodayBox,
  Day,
  DayFeeling,
  Temperature,
  Icon,
  OtherInfo,
} from './WeatherToday.styles'

interface WeatherTodayProps {
  temperature: string
  dayFeeling: string
  windDirection: string
  windSpeed: string
  airHumidity: string
  airPressure: string
}

const WeatherToday = ({
  temperature,
  dayFeeling,
  windDirection,
  windSpeed,
  airHumidity,
  airPressure,
}: WeatherTodayProps) => {
  const backgroundColor = useBackgroundColor('celsius', temperature, 0, 0.92)
  const temperatureString = temperature.toString().toUpperCase()
  return (
    <IconContext.Provider value={{ size: '120' }}>
      <WeatherTodayContainer backgroundColor={backgroundColor}>
        <WeatherTodayBox>
          <Icon>
            <ImSun />
          </Icon>
        </WeatherTodayBox>
        <WeatherTodayBox>
          <Day>HOJE</Day>
          <Temperature>{temperatureString}</Temperature>
          <DayFeeling>{dayFeeling}</DayFeeling>
          <OtherInfo>
            Vento: {windDirection} {windSpeed}
          </OtherInfo>
          <OtherInfo>Humidade: {airHumidity}</OtherInfo>
          <OtherInfo>Pressão: {airPressure}</OtherInfo>
        </WeatherTodayBox>
      </WeatherTodayContainer>
    </IconContext.Provider>
  )
}

export default WeatherToday
