import React from 'react';
import { WeatherInfoContainer } from './styles';
import { TopInfo } from '../TopInfo';
import { MidInfo } from '../MidInfo';
import { BottomInfo } from '../BottomInfo';

export const WeatherInfo = ({ isOpen, day }) => {
  return (
    <WeatherInfoContainer isOpen={isOpen}>
      <TopInfo isOpen={isOpen} day={day} />
      {isOpen && (
        <React.Fragment>
          <MidInfo />
          <BottomInfo />
        </React.Fragment>
      )}
    </WeatherInfoContainer>
  );
};
