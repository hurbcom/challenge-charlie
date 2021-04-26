import React, { useEffect, useState } from 'react'
import { DayType } from '../../common/types/day'
import { OtherDaysWrapper, OtherDaysWrapperIcon, OtherDaysDetails } from './OtherDays.style'
import Icon from '../Icon'
import { Title } from '../UI/Title'

type Props = {
  day: number
  contextOtherDays: DayType
}

const OtherDays: React.FC<Props> = ({ day, contextOtherDays }: Props) => {
  const [temperature, setTemperature] = useState(Math.round(contextOtherDays?.main.temp))
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

  const backgroundColor = () => {
    if (contextOtherDays?.main.temp < 15) {
      if (day === 1) {
        return 'rgba(79,127,234,0.7)'
      } else {
        return 'rgba(79,127,234,0.9)'
      }
    } else if (contextOtherDays?.main.temp >= 15 && contextOtherDays?.main.temp <= 35) {
      if (day === 1) {
        return 'rgba(234,208,79,0.7)'
      } else {
        return 'rgba(234,208,79,0.9)'
      }
    } else if (contextOtherDays?.main.temp > 35) {
      if (day === 1) {
        return 'rgba(253,104,104,0.7)'
      } else {
        return 'rgba(253,104,104,0.9)'
      }
    } else {
      if (day === 1) {
        return 'rgba(143, 143, 143, 0.3)'
      } else {
        return 'rgba(143, 143, 143, 0.5)'
      }
    }
  }

  useEffect(() => {
    setTemperature(Math.round(contextOtherDays?.main.temp))
  }, [contextOtherDays?.main.temp])

  return (
    <OtherDaysWrapper color={backgroundColor()}>
      <OtherDaysWrapperIcon>
        <Icon weather={contextOtherDays?.weather[0].main} width="100" height="100" />
      </OtherDaysWrapperIcon>
      <OtherDaysDetails>
        <Title>{day === 1 ? 'Amanhã' : 'Depois de Amanhã'}</Title>
        <Title hasClick={true} onClick={() => handleClick()}>
          {scaleCelsius ? `${temperature} °C` : `${temperature} °F`}
        </Title>
      </OtherDaysDetails>
    </OtherDaysWrapper>
  )
}

export default OtherDays
