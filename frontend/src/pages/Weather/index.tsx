import React, {
  useCallback, useContext, useEffect, useState,
} from 'react';

import { WeatherContext } from '@contexts/Weather';

import Day from './components/Day';
import CitiesInput from './components/CitiesInput';

const WeatherCard: React.FC = () => {
  const {
    fetchWeatherByLocation,
    weatherData,
  } = useContext(WeatherContext);

  const [unitOfMeasure, setUnitOfMeasure] = useState<'ºF' | 'ºC'>('ºF');

  useEffect(() => {
    fetchWeatherByLocation({
      cityName: 'São Paulo',
    });
  }, [fetchWeatherByLocation]);

  const onClickInTemperature = useCallback(() => {
    setUnitOfMeasure(unitOfMeasure === 'ºF' ? 'ºC' : 'ºF');
  }, [unitOfMeasure]);

  const [today, tomorrow, afterTomorrow] = weatherData.weatherByDays;

  return (
    <div className="weather">
      <div className="darkness --right" />
      <main>
        <CitiesInput
          value="Rio de Janeiro, Rio de Janeiro"
          onChange={(e: any) => {
            const target = e.target as HTMLInputElement;

            console.log(target.value);
          }}
        />

        <Day
          day="Hoje"
          unitOfMeasure={unitOfMeasure}
          weather={today}
          variant="--today"
          onClickInTemperature={onClickInTemperature}
        />

        <Day
          day="Amanhã"
          unitOfMeasure={unitOfMeasure}
          weather={tomorrow}
          variant="--tomorrow"
          onClickInTemperature={onClickInTemperature}
        />

        <Day
          day="Depois de amanha"
          unitOfMeasure={unitOfMeasure}
          weather={afterTomorrow}
          variant="--after-tomorrow"
          onClickInTemperature={onClickInTemperature}
        />

        <div className="darkness --bottom" />
      </main>
      <div className="darkness --left" />
    </div>
  );
};

export default WeatherCard;
