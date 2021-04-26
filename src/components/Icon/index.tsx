import React from 'react'
import Clear from '../../assets/icons/Clear'
import Clouds from '../../assets/icons/Clouds'
import Rain from '../../assets/icons/Rain'
import Drizzle from '../../assets/icons/Drizzle'
import Thunderstorm from '../../assets/icons/Thunderstorm'
import Snow from '../../assets/icons/Snow'
import WeatherDefault from '../../assets/icons/WeatherDefault'

type Props = {
  weather: string
  width: string
  height: string
}

const Icon: React.FC<Props> = ({ weather, width, height }: Props) => {
  let componentIcon

  switch (weather) {
    case 'Clear':
      componentIcon = <Clear width={width} height={height} />
      break
    case 'Clouds':
      componentIcon = <Clouds width={width} height={height} />
      break
    case 'Rain':
      componentIcon = <Rain width={width} height={height} />
      break
    case 'Drizzle':
      componentIcon = <Drizzle width={width} height={height} />
      break
    case 'Thunderstorm':
      componentIcon = <Thunderstorm width={width} height={height} />
      break
    case 'Snow':
      componentIcon = <Snow width={width} height={height} />
      break
    default:
      componentIcon = <WeatherDefault width={width} height={height} />
      break
  }

  return <i>{componentIcon}</i>
}

export default Icon
