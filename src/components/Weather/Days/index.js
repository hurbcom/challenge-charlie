import React, { useState } from 'react';
import { useWeatherContext } from '../../../contexts/AppDataContext';
import { useWeatherData } from '../../../services/hooks/useWeather';
import { DayWeather, Loading } from '../../index';

export const Weather = () => {
  const [currentId, setCurrentId] = useState(0);
  const setId = id => () => setCurrentId(id);

  const { coordinates } = useWeatherContext();
  const { weatherData, isLoading } = useWeatherData(coordinates);

  if (isLoading) {
    return <Loading selectingLocation={true} />;
  }

  return (
    <React.Fragment>
      {weatherData.map((element, index) => {
        return (
          <DayWeather
            key={index}
            id={index}
            setId={setId}
            currentId={currentId}
            isLoading={isLoading}
            day={element.day}
            temperature={element.temperature}
            description={element.description}
            wind={element.wind}
            humidity={element.humidity}
            pressure={element.pressure}
          />
        );
      })}
    </React.Fragment>
  );
};
