import React from 'react'
import SunnyDay from '../../../public/assets/icons/weather/wi-day-sunny.svg'
import SunnyOvercast from '../../../public/assets/icons/weather/wi-day-sunny-overcast.svg'
import DayRain from '../../../public/assets/icons/weather/wi-day-rain.svg'
import Clouds from '../../../public/assets/icons/weather/wi-cloud.svg'

interface Props {
  codeIcon: string
}
export const WeatherIcon: React.FC<Props> = ({ codeIcon }) => {
  const classname = 'fill-current text-white w-full h-full'
  switch (codeIcon) {
    case '10d':
      return <DayRain className={classname} />
    case '04d':
      return <SunnyOvercast className={classname} />
    case '04n':
      return <Clouds className={classname} />
    default:
      return <SunnyDay className={classname} />
  }
}
