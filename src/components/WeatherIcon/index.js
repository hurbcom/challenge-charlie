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

  const fetchCloudsIcon = (details) => {
    if (details === 'few clouds') {
      return isDayTime ? <PartlyCloudDay /> : <PartlyCloudNight />
    }
    if (details === 'scattered clouds') {
      return <Cloudy />
    }
    return <BrokenClouds />
  }

  const fetchIcon = (weather, details) => ({
    'Thunderstorm': <Thunderstorm />,
    'Drizzle': <Drizzle />,
    'Rain': <Rain />,
    'Snow': <Snow />,
    'Mist': <Mist />,
    'Fog': <Fog />,
    'Clear': isDayTime ? <ClearDay /> : <ClearNight />,
    'Clouds': fetchCloudsIcon(details),
    'Squall': <Wind />,
  }[props.isLocationExists ? weather : <NotApplicable />] || <NotApplicable />)

  return (
    <>
      {fetchIcon(props.weather.main, props.weather.description)}
    </>
  );
}
