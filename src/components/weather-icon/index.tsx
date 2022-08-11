import React from 'react';
import { Container } from './styles';
import { useWeatherIcon } from '../../services/hooks/useWeatherIcon/useWeatherIcon';

interface WeatherIconProps {
  isOpen: boolean;
  iconCode: string;
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({ isOpen, iconCode }) => {
  const icon = useWeatherIcon(iconCode);

  return (
    <Container isOpen={isOpen}>
      {isOpen && <img src={icon} alt="compass icon" />}
    </Container>
  );
};
