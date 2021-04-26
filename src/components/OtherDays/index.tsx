import React, { useState } from 'react'
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

  return (
    <OtherDaysWrapper day={day}>
      <OtherDaysWrapperIcon>
        <Icon>ICON</Icon>
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
