import React from 'react';
import { WeatherInfoContainer } from './styles';
import { TopInfo } from './TopInfo';
import { MidInfo } from './MidInfo';
import { BottomInfo } from './BottomInfo';
import { IFormattedDailyWeather } from '../../contexts/app-data/interfaces';

interface WeatherInfoProps extends IFormattedDailyWeather {
  isOpen: boolean;
}

export const WeatherInfo = ({
  isOpen,
  day,
  temperature,
  humidity,
  pressure,
  wind,
  description,
}: WeatherInfoProps) => {
  return (
    <WeatherInfoContainer isOpen={isOpen} data-testid="weather-info">
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
