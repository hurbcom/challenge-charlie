import './styles.css';
import { FunctionComponent } from 'react';

interface WeatherIconProps {
  icon: FunctionComponent;
}

export function WeatherIcon({ icon: Icon }: WeatherIconProps) {
  return (
    <div className="weather-icon__container">
      <Icon />
    </div>
  );
}
