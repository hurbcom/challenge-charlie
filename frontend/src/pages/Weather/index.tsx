import React, {
  useCallback, useContext, useEffect, useState,
} from 'react';

import { WeatherContext } from '@contexts/Weather';

import BrowserGeolocationAPI from '@libraries/BrowserGeolocationAPI';
import Day from './components/Day';
import CitiesInput from './components/CitiesInput';

const WeatherCard: React.FC = () => {
  const {
    fetchWeatherByLocation,
    weatherData,
  } = useContext(WeatherContext);

  const [unitOfMeasure, setUnitOfMeasure] = useState<'ºF' | 'ºC'>('ºC');

  const onClickInTemperature = useCallback(() => {
    setUnitOfMeasure(unitOfMeasure === 'ºF' ? 'ºC' : 'ºF');
  }, [unitOfMeasure]);

  const fetchInitialLocation = useCallback(async () => {
    const granted = await BrowserGeolocationAPI.grantPermissions();

    if (!granted) return;

    const coordinates = await BrowserGeolocationAPI.getActualCoordinates();

    if (typeof coordinates === 'boolean') {
      return;
    }

    if ('latitude' in coordinates && 'longitude' in coordinates) {
      fetchWeatherByLocation(coordinates);
    }
  }, [fetchWeatherByLocation]);

  useEffect(() => {
    fetchInitialLocation();
  }, [fetchInitialLocation]);

  const [today, tomorrow, afterTomorrow] = weatherData.weatherByDays;

  return (
    <div className="weather">
      <div className="darkness --right" />
      <main>
        <CitiesInput />

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
      </main>
      <div className="darkness --left" />
    </div>
  );
};

export default WeatherCard;
