import React, { useMemo } from 'react';
import Image from 'next/image';

import { useWeatherInfo } from '~/hooks';
import { Weather } from '~/@types/openWeather';
import { convertWindDegreeToDirection } from '~/utils';

import * as S from './styles';

export type WeatherStatusProps = {
  date: Date;
  weather?: Weather;
  isDetailed?: boolean;
};

const WeatherStatus = ({ date, weather, isDetailed = false }: WeatherStatusProps) => {
  const { icon, textDay, backgroundColor, formattedTemperature, handleToggleTemperatureType } = useWeatherInfo({
    date,
    weather,
  });

  const imageDimensions = useMemo(() => {
    if (isDetailed) {
      return { width: 220, height: 220 };
    }

    return { width: 80, height: 80 };
  }, [isDetailed]);

  if (!textDay || !weather) {
    return <S.Container />;
  }

  return (
    <S.Container color={backgroundColor} isDetailed={isDetailed}>
      <Image
        {...imageDimensions}
        src={`assets/${icon}.svg`}
        alt={`Ícone representando o clima ${weather.description}`}
      />

      <S.InfosWrapper>
        <S.Info>
          <span>{textDay}</span>

          <S.Temperature onClick={handleToggleTemperatureType}>{formattedTemperature}</S.Temperature>
        </S.Info>

        {isDetailed && (
          <S.Info>
            <span>{weather.description}</span>

            <small>
              Vento: {convertWindDegreeToDirection(weather.wind.degrees)} {weather.wind.speed}km/H
            </small>
            <small>Humidade: {weather.humidity}%</small>
            <small>Pressão: {weather.pressure}hPA</small>
          </S.Info>
        )}
      </S.InfosWrapper>
    </S.Container>
  );
};

export default WeatherStatus;
