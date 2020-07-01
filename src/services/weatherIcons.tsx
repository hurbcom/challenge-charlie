import React from 'react';

import {
  WiDaySunny,
  WiDayCloudy,
  WiCloud,
  WiCloudy,
  WiRain,
  WiDayShowers,
  WiThunderstorm,
  WiSnowflakeCold,
  WiFog,
} from 'react-icons/wi';

interface GetWeatherProps {
  weatherCode?: string | undefined;
}

const WeatherIcon: React.FC<GetWeatherProps> = ({ weatherCode, ...rest }) => {
  if (weatherCode === '02d' || weatherCode === '02n') {
    return <WiDayCloudy />;
  }
  if (weatherCode === '03d' || weatherCode === '03n') {
    return <WiCloud />;
  }
  if (weatherCode === '04d' || weatherCode === '04n') {
    return <WiCloudy />;
  }
  if (weatherCode === '09d' || weatherCode === '09n') {
    return <WiRain />;
  }
  if (weatherCode === '10d' || weatherCode === '10n') {
    return <WiDayShowers />;
  }
  if (weatherCode === '11d' || weatherCode === '11n') {
    return <WiThunderstorm />;
  }
  if (weatherCode === '13d' || weatherCode === '13n') {
    return <WiSnowflakeCold />;
  }
  if (weatherCode === '50d' || weatherCode === '50n') {
    return <WiFog />;
  }
  return <WiDaySunny />;
};

export default WeatherIcon;
