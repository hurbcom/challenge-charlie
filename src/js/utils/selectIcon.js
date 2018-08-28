import React from 'react'
import Tornado from '../weather-icon/Tornado'
import ThunderRain from '../weather-icon/ThunderRain'
import Hurricane from '../weather-icon/Hurricane'
import Rain from '../weather-icon/Rain'
import SnowRain from '../weather-icon/SnowRain'
import Snow from '../weather-icon/Snow'
import Foggy from '../weather-icon/Foggy'
import Cloudy from '../weather-icon/Cloudy'
import Wind from '../weather-icon/Wind'
import Cold from '../weather-icon/Cold';
import SeveralThunder from '../weather-icon/SeveralThunder';
import Dust from '../weather-icon/Dust';
import MostlyCloudyNight from '../weather-icon/MostlyCloudyNight';
import MostlyCloudySun from '../weather-icon/MostlyCloudySun';
import PartlyCloudyNight from '../weather-icon/PartlyCloudyNight';
import PartlyCloudySun from '../weather-icon/PartlyCloudySun';
import CleanNight from '../weather-icon/CleanNight';
import ClearSun from '../weather-icon/Sun';
import HeavySnow from '../weather-icon/HeavySnow';
import Thunder from '../weather-icon/Thunder';


const WeatherIcon = ({code})=>{
    switch(code){
        case 0:
          return <Tornado/>
        case 1:
        case 45:
        case 47:
        return <ThunderRain/>
        case 3:
        case 4:
        case 38:
        case 39:
        return <SeveralThunder/>
        case 2:
        return <Hurricane/>
        case 5:
        return <SnowRain/>
        case 8:
        return <Rain/>
        case 11:
        case 12:
        case 40:
        case 35:
        return <Rain/>
        case 13:
        case 14:
        case 15:
        case 16:
        case 46:
        return <Snow/>
        case 19:
        return <Dust/>
        case 20:
        case 21:
        return <Foggy/>
        case 22:
        case 26:
        case 44:
        return <Cloudy/>
        case 23:
        case 24:
        return <Wind/>
        case 25:
        return <Cold/>
        case 27:
        return <MostlyCloudyNight/>
        case 28:
        return <MostlyCloudySun/>
        case 29:
        return <PartlyCloudyNight/>
        case 30:
        return <PartlyCloudySun/>
        case 31:
        case 33:
        return <CleanNight/>
        case 32:
        case 34:
        case 36:
        return <ClearSun/>
        case 37:
        return <Thunder/>
        case 41:
        case 42:
        case 43:
        return <HeavySnow/>
        case 37:
        return <Thunder/>
          default:
          return 'not-ok'
    }
}

export default WeatherIcon;
