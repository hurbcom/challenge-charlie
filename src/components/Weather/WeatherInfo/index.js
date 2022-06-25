import React from 'react';
import { WeatherInfoContainer } from './styles';
import { TopInfo } from '../TopInfo';
import { MidInfo } from '../MidInfo';
import { BottomInfo } from '../BottomInfo';

export const WeatherInfo = ({
  isOpen,
  day,
  temperature,
  description,
  wind,
  humidity,
  pressure,
}) => {
  return (
    <WeatherInfoContainer isOpen={isOpen}>
      <TopInfo isOpen={isOpen} day={day} temperature={temperature} />
      {isOpen && (
        <React.Fragment>
          <MidInfo description={description} />
          <BottomInfo wind={wind} humidity={humidity} pressure={pressure} />
        </React.Fragment>
      )}
    </WeatherInfoContainer>
  );
};
