import React from 'react'
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
  return (
    <TodayWrapper>
      <TodayWrapperIcon>
        <Icon>ICON</Icon>
      </TodayWrapperIcon>
      <TodayDetails>
        <Title>HOJE</Title>
        <Title>{`${contextToday?.main.temp_max} F`}</Title>
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
