import React from 'react'
import { DayType } from '../../common/types/day'
import { OtherDaysWrapper, OtherDaysWrapperIcon, OtherDaysDetails } from './OtherDays.style'
import Icon from '../Icon'
import { Title } from '../UI/Title'

type Props = {
  contextOtherDays: DayType
}

const OtherDays: React.FC<Props> = ({ contextOtherDays }: Props) => {
  return (
    <OtherDaysWrapper>
      <OtherDaysWrapperIcon>
        <Icon>ICON</Icon>
      </OtherDaysWrapperIcon>
      <OtherDaysDetails>
        <Title>Amanhã</Title>
        <Title>{`${contextOtherDays?.main.temp_max} F`}</Title>
      </OtherDaysDetails>
    </OtherDaysWrapper>
  )
}

export default OtherDays
