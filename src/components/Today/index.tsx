import React, { useState } from 'react'
import { DayType } from '../../common/types/day'
import {
  TodayWrapper,
  TodayDetails,
  TodayWeather,
  TodayDetailsWeather,
  TodayDetailsWeatherItem,
  TodayWrapperIcon,
} from './Today.style'
import Icon from '../Icon'
import { Title } from '../UI/Title'

type Props = {
  contextToday: DayType
}

const Today: React.FC<Props> = ({ contextToday }: Props) => {
  const [temperature, setTemperature] = useState(Math.round(contextToday?.main.temp))
  const [scaleCelsius, setScaleCelsius] = useState(true)

  const handleClick = () => {
    let newTemperature

    if (scaleCelsius) {
      newTemperature = Math.round((9 * temperature) / 5 + 32)
      setScaleCelsius(false)
      setTemperature(newTemperature)
    } else {
      newTemperature = Math.round(((temperature - 32) * 5) / 9)
      setScaleCelsius(true)
      setTemperature(newTemperature)
    }
  }

  return (
    <TodayWrapper>
      <TodayWrapperIcon>
        <Icon>ICON</Icon>
      </TodayWrapperIcon>
      <TodayDetails>
        <Title>HOJE</Title>
        <Title hasClick={true} onClick={() => handleClick()}>
          {scaleCelsius ? `${temperature} °C` : `${temperature} °F`}
        </Title>
        <TodayWeather>{contextToday?.weather[0]?.description}</TodayWeather>
        <TodayDetailsWeather>
          <TodayDetailsWeatherItem>Vento: NO {contextToday?.wind?.speed} km/h</TodayDetailsWeatherItem>
          <TodayDetailsWeatherItem>Umidade: {contextToday?.main?.humidity} %</TodayDetailsWeatherItem>
          <TodayDetailsWeatherItem>Pressão: {contextToday?.main?.pressure}hPA </TodayDetailsWeatherItem>
        </TodayDetailsWeather>
      </TodayDetails>
    </TodayWrapper>
  )
}

export default Today
