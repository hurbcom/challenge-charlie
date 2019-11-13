import React from 'react';

import { ReactComponent as BrokenClouds } from './../../icons/broken-clouds.svg';
import { ReactComponent as ClearDay } from './../../icons/clear-day.svg';
import { ReactComponent as ClearNight } from './../../icons/clear-night.svg';
import { ReactComponent as Cloudy } from './../../icons/cloudy.svg';
import { ReactComponent as Drizzle } from './../../icons/drizzle.svg';
import { ReactComponent as Fog } from './../../icons/fog.svg';
import { ReactComponent as Mist } from './../../icons/mist.svg';
import { ReactComponent as NotApplicable } from './../../icons/not-applicable.svg';
import { ReactComponent as PartlyCloudDay } from './../../icons/partly-cloudy-day.svg';
import { ReactComponent as PartlyCloudNight } from './../../icons/partly-cloudy-night.svg';
import { ReactComponent as Rain } from './../../icons/rain.svg';
import { ReactComponent as ShowerRain } from './../../icons/shower-rain.svg';
import { ReactComponent as Snow } from './../../icons/snow.svg';
import { ReactComponent as Thunderstorm } from './../../icons/thunder-storm.svg';
import { ReactComponent as Wind } from './../../icons/wind.svg';

export default function WeatherIcon(props) {
  const isDayTime = () => {
    const date = new Date();
    return date.getHours() >= 6 && date.getHours() <= 18
  }

  const fetchIcon = (weather, details) => {
    if (!props.isLocationExists) {
      return <NotApplicable />
    }

    switch (weather) {
      case 'Thunderstorm': return <Thunderstorm />
      case 'Drizzle': return <Drizzle />
      case 'Rain': {
        if (details === 'shower rain') {
          return <ShowerRain />
        }
        return <Rain />
      }
      case 'Snow': return <Snow />
      case 'Mist': return <Mist />
      case 'Fog': return <Fog />
      case 'Clear': return isDayTime ? <ClearDay /> : <ClearNight />
      case 'Clouds': {
        if (details === 'few clouds') {
          return isDayTime ? <PartlyCloudDay /> : <PartlyCloudNight />
        }
        if (details === 'scattered clouds') {
          return <Cloudy />
        }
        return <BrokenClouds />
      }
      case 'Squall': return <Wind />
      default: return;
    }
  }

  return (
    <>
      {fetchIcon(props.weather.main, props.weather.description)}
    </>
  );
}
