import React, { useState } from 'react';
import { useWeatherContext } from '../../../contexts/AppDataContext';
import { useGeolocation, useWeatherData } from '../../../services/hooks';
import { DayWeather, Loading } from '../../index';

export const Weather = () => {
  const [currentId, setCurrentId] = useState(0);
  const setId = id => () => setCurrentId(id);

  const { coordinates, setTemperature } = useWeatherContext();
  const { userCoordinates, isLoad } = useGeolocation();

  const coords = coordinates.lat ? coordinates : userCoordinates;
  const { weatherData, isLoading, isError } = useWeatherData(
    coords,
    setTemperature,
  );

  if (isLoading || !isLoad) {
    return <Loading selectingLocation={true} />;
  }

  return (
    <React.Fragment>
      {weatherData.map((element, index) => {
        return (
          <DayWeather
            key={index}
            id={index}
            elementType={typeof element}
            setId={setId}
            currentId={currentId}
            isLoading={isLoading}
            isError={isError}
            day={element?.day}
            weatherId={element?.weatherId}
            temperature={element?.temperature}
            description={element?.description}
            wind={element?.wind}
            humidity={element?.humidity}
            pressure={element?.pressure}
          />
        );
      })}
    </React.Fragment>
  );
};
