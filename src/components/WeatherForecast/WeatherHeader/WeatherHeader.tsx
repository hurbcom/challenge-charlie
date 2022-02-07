import React from 'react'
import { RiCompassLine } from 'react-icons/ri'
import { IconContext } from 'react-icons'

import {
  WeatherHeaderContainer,
  WeatherHeaderIcon,
  WeatherHeaderText,
} from './WeatherHeader.styles'

interface WeatherHeaderProps {
  city: string
  state: string
}

const WeatherHeader = ({ city, state }: WeatherHeaderProps) => {
  return (
    <WeatherHeaderContainer>
      <WeatherHeaderIcon>
        <RiCompassLine />
      </WeatherHeaderIcon>
      <WeatherHeaderText>
        {city}, {state}
      </WeatherHeaderText>
    </WeatherHeaderContainer>
  )
}

const WeatherHeaderWrapper = (props: WeatherHeaderProps) => (
  <IconContext.Provider value={{ size: '35' }}>
    <WeatherHeader {...props} />
  </IconContext.Provider>
)
export default WeatherHeaderWrapper
