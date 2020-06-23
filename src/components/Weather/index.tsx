import React, { useMemo, useEffect, useState, useCallback } from 'react';

import { Container } from './styles';
import Icon from '../Icon';

interface Weather {
  description: string;
  icon: string;
}

interface WeatherDay {
  humidity: number;
  pressure: number;
  speed: number;
  temp: {
    day: number;
  };
  weather: Weather[];
}

interface WeatherProps {
  weather: WeatherDay;
  active: boolean;
  title: string;
  degrade: number;
  onClick(): void;
}

const Weather: React.FC<WeatherProps> = ({
  title,
  weather,
  active,
  degrade,
  onClick,
}) => {
  const [temperature, setTemperature] = useState(100);
  const [temperatureType, setTemperatureType] = useState<'C' | 'F'>('C');

  useEffect((): void => {
    if (!weather.temp) {
      return;
    }
    setTemperature(Math.trunc(weather.temp.day));
  }, [weather.temp]);

  const weatherDescription = useMemo((): string => {
    const fetchedDescription = weather.weather;

    if (!fetchedDescription) {
      return '';
    }

    return fetchedDescription[0].description.toUpperCase();
  }, [weather]);

  const iconName = useMemo((): string => {
    const icon = weather.weather;

    if (!icon) {
      return '';
    }
    return icon[0].icon;
  }, [weather]);

  const windSpeedFormattedToKMPerHour = useMemo(() => {
    const windFormatted = weather.speed * 3.6;
    return windFormatted.toFixed(2);
  }, [weather.speed]);

  const temperatureInFahrenheit = useMemo(() => {
    const result = (temperature * 9) / 5 + 32;
    return Math.trunc(result);
  }, [temperature]);

  const toggleCelsiusToFahrenheit = useCallback(() => {
    temperatureType === 'C' ? setTemperatureType('F') : setTemperatureType('C');
  }, [temperatureType]);

  return (
    <Container
      active={active}
      onClick={onClick}
      temperature={temperature}
      degrade={degrade}
    >
      <Icon name={iconName} />

      <div>
        <h1>{title}</h1>
        {weather.temp && (
          <>
            <button type="button" onClick={toggleCelsiusToFahrenheit}>
              {temperatureType === 'C'
                ? `${temperature}ºC`
                : `${temperatureInFahrenheit}ºF`}
            </button>

            <fieldset>
              <h1>{weatherDescription}</h1>
              <p>Vento: {windSpeedFormattedToKMPerHour}km/h</p>
              <p>Humidade: {weather.humidity}</p>
              <p>Pressão: {weather.pressure}</p>
            </fieldset>
          </>
        )}
      </div>
    </Container>
  );
};

export default Weather;
