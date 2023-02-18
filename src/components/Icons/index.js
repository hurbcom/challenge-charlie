import React from 'react'
import {ClearSky} from "./ClearSky"
import {FewClouds} from "./FewClouds"
import {BrokenClouds} from "./BrokenClouds"
import {Mist} from "./Mist"
import {Rain} from "./Rain"
import {ShowerRain} from "./ShowerRain"
import {ScatteredClouds} from "./ScatteredClouds"
import {Thunderstorm} from "./Thunderstorm"
import {Snow} from "./Snow"

export function Icons({name, color, size}) {
  return (
    <div>
      {name == "Clear" && <ClearSky color={color} size={size} /> }
      {name == "Clouds" && <FewClouds color={color} size={size} />}
      {name == "Mist" && <Mist color={color} size={size} />}
      {name == "Rain" && <Rain color={color} size={size} />}
      {name == "Drizzle" && <ShowerRain color={color} size={size} /> }
      {name == "Thunderstorm" && <Thunderstorm color={color} size={size} /> }
      {name == "Snow" && <Snow color={color} size={size} />}
    </div>
    
  )
}