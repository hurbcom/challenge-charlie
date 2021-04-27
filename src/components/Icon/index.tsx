import React from 'react'
import Clear from '../../assets/icons/Clear'
import Clouds from '../../assets/icons/Clouds'
import Rain from '../../assets/icons/Rain'
import Drizzle from '../../assets/icons/Drizzle'
import Thunderstorm from '../../assets/icons/Thunderstorm'
import Snow from '../../assets/icons/Snow'
import WeatherDefault from '../../assets/icons/WeatherDefault'
import { IconWrapper } from './Icon.style'

type Props = {
  weather: string
}

const Icon: React.FC<Props> = ({ weather }: Props) => {
  let componentIcon

  switch (weather) {
    case 'Clear':
      componentIcon = <Clear />
      break
    case 'Clouds':
      componentIcon = <Clouds />
      break
    case 'Rain':
      componentIcon = <Rain />
      break
    case 'Drizzle':
      componentIcon = <Drizzle />
      break
    case 'Thunderstorm':
      componentIcon = <Thunderstorm />
      break
    case 'Snow':
      componentIcon = <Snow />
      break
    default:
      componentIcon = <WeatherDefault />
      break
  }

  return <IconWrapper>{componentIcon}</IconWrapper>
}

export default Icon
