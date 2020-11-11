import React, { FunctionComponent } from 'react';

import { IWeatherInformation } from './interface';
import { SContainer, SDescription, SInformation } from './styled';

const WeatherInformation: FunctionComponent<IWeatherInformation> = ({
  description,
  humidity,
  pressure,
  windDirection,
  windSpeed
}) => {
  return (
    <SContainer>
      <SDescription>{description}</SDescription>

      <SInformation>{`Vento: ${windDirection} ${windSpeed}km/h`}</SInformation>
      <SInformation>{`Humidade: ${humidity}%`}</SInformation>
      <SInformation>{`Pressão: ${pressure}hPA`}</SInformation>
    </SContainer>
  );
};

export default WeatherInformation;
