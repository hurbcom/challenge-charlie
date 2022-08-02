import React from 'react'

import { ReactComponent as Sun } from '../../Assets/Icons/Clear.svg'
import { ReactComponent as Atmosphere } from '../../Assets/Icons/Atmosphere.svg'
import { ReactComponent as Clouds } from '../../Assets/Icons/Clouds.svg'
import { ReactComponent as Drizzle } from '../../Assets/Icons/Drizzle.svg'
import { ReactComponent as Rain } from '../../Assets/Icons/Rain.svg'
import { ReactComponent as Snow } from '../../Assets/Icons/Snow.svg'
import { ReactComponent as Thunderstorm } from '../../Assets/Icons/Thunderstorm.svg'

export const WeatherIcon = (iconName: string) => {
  const iconList = {
    Atmosphere: <Atmosphere fill='#FFF' width={200} height={200}/>,
    Clear: <Sun fill='#FFF' width={200} height={200}/>,
    Clouds: <Clouds fill='#FFF' width={200} height={200}/>,
    Drizzle: <Drizzle fill='#FFF' width={170} height={170}/>,
    Fog: <Atmosphere fill='#FFF' width={200} height={200}/>,
    Mist: <Atmosphere fill='#FFF' width={200} height={200}/>,
    Rain: <Rain fill='#FFF' width={170} height={170}/>,
    Snow: <Snow fill='#FFF' width={200} height={200}/>,
    Thunderstorm: <Thunderstorm fill='#FFF' width={170} height={170}/>
  }
  if (iconName) {
    return (iconList as any)[iconName]
  }
  return <></>
}
