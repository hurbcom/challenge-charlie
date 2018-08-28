import React from 'react'
import Tornado from '../components/weather-icon/Tornado'
import ThunderRain from '../components/weather-icon/ThunderRain'
import Hurricane from '../components/weather-icon/Hurricane'
import Rain from '../components/weather-icon/Rain'
import SnowRain from '../components/weather-icon/SnowRain'
import Snow from '../components/weather-icon/Snow'
import Foggy from '../components/weather-icon/Foggy'
import Cloudy from '../components/weather-icon/Cloudy'
import Wind from '../components/weather-icon/Wind'
import Cold from '../components/weather-icon/Cold';
import SeveralThunder from '../components/weather-icon/SeveralThunder';
import Dust from '../components/weather-icon/Dust';
import MostlyCloudyNight from '../components/weather-icon/MostlyCloudyNight';
import MostlyCloudySun from '../components/weather-icon/MostlyCloudySun';
import PartlyCloudyNight from '../components/weather-icon/PartlyCloudyNight';
import PartlyCloudySun from '../components/weather-icon/PartlyCloudySun';
import CleanNight from '../components/weather-icon/CleanNight';
import ClearSun from '../components/weather-icon/Sun';
import HeavySnow from '../components/weather-icon/HeavySnow';
import Thunder from '../components/weather-icon/Thunder';


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
