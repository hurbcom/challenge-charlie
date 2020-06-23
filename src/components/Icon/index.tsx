import React from 'react';
import {
  WiDaySunny,
  WiDaySunnyOvercast,
  WiCloudy,
  WiCloud,
  WiThunderstorm,
  WiDayRain,
  WiRain,
} from 'react-icons/wi';
import { FaSnowflake } from 'react-icons/fa';

interface IconProps {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name }) => {
  switch (name) {
    case '01d':
      return <WiDaySunny data-testid="icon" />;
    case '02d':
      return <WiDaySunnyOvercast data-testid="icon" />;
    case '03d':
      return <WiCloud data-testid="icon" />;
    case '04d':
      return <WiCloudy data-testid="icon" />;
    case '09d':
      return <WiRain data-testid="icon" />;
    case '10d':
      return <WiDayRain data-testid="icon" />;
    case '11d':
      return <WiThunderstorm data-testid="icon" />;
    case '13d':
      return <FaSnowflake data-testid="icon" />;
    case '50d':
      return <FaSnowflake data-testid="icon" />;
    default:
      return <WiDaySunny data-testid="icon" />;
  }
};

export default Icon;
