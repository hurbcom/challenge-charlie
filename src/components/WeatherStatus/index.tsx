import React from 'react';
import Image from 'next/image';

import { Weather } from '~/@types/openWeather';
import { useWeatherInfo } from '~/hooks';

import * as S from './styles';

export type WeatherStatusProps = {
  date: Date;
  weather?: Weather;
};

const WeatherStatus = ({ date, weather }: WeatherStatusProps) => {
  const { icon, textDay, backgroundColor, formattedTemperature, handleToggleTemperatureType } = useWeatherInfo({
    date,
    weather,
  });

  if (!textDay || !weather) {
    return <S.Container />;
  }

  return (
    <S.Container color={backgroundColor}>
      <Image
        width="60"
        height="60"
        src={`assets/${icon}.svg`}
        alt={`Ícone representando o clima ${weather.description}`}
      />

      <S.Info>
        <span>{textDay}</span>

        <S.Temperature onClick={handleToggleTemperatureType}>{formattedTemperature}</S.Temperature>
      </S.Info>
    </S.Container>
  );
};

export default WeatherStatus;
