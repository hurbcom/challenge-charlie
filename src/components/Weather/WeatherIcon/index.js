import React from 'react';
import { useWeatherIcon } from './hooks/useWeatherIcon';
import { IconWrapper } from './styles';

export const WeatherIcon = ({ isOpen, weatherId }) => {
  const { icons, iconKey } = useWeatherIcon(weatherId);

  return (
    <IconWrapper isOpen={isOpen}>
      {isOpen && <img src={icons[iconKey]} alt="weather icon" />}
    </IconWrapper>
  );
};
