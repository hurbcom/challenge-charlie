import React from 'react';
import { WeatherInfoContainer } from './styles';
import { TopInfo } from './TopInfo';
import { MidInfo } from './MidInfo';
import { BottomInfo } from './BottomInfo';

interface WeatherInfoProps {
  isOpen: boolean;
}

export const WeatherInfo = ({ isOpen }: WeatherInfoProps) => {
  return (
    <WeatherInfoContainer isOpen={isOpen}>
      <TopInfo isOpen={isOpen} day={'Hoje'} temperature={12} />
      {isOpen && (
        <React.Fragment>
          <MidInfo description={'nublado'} />
          <BottomInfo wind={{ speed: 12, direction: 'NO' }} humidity={12} pressure={12} />
        </React.Fragment>
      )}
    </WeatherInfoContainer>
  );
};
