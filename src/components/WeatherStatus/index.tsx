import React, { useMemo } from 'react';
import Image from 'next/image';

import { useWeatherInfo } from '~/hooks';
import { Weather } from '~/@types/openWeather';
import { convertWindDegreeToDirection } from '~/utils';

import * as S from './styles';

export type WeatherStatusProps = {
  weather?: Weather;
  isDetailed?: boolean;
};

const WeatherStatus = ({ weather, isDetailed = false }: WeatherStatusProps) => {
  const { icon, textDay, backgroundColor, formattedTemperature, reverseTemperatureType, handleToggleTemperatureType } =
    useWeatherInfo({
      weather,
    });

  const imageDimensions = useMemo(() => {
    if (isDetailed) return { width: 220, height: 220 };

    return { width: 80, height: 80 };
  }, [isDetailed]);

  if (!textDay || !weather) return <S.Container />;

  return (
    <S.Container color={backgroundColor} isDetailed={isDetailed}>
      <Image
        {...imageDimensions}
        src={`assets/${icon}.svg`}
        alt={`Ícone representando o clima ${weather.description}`}
      />

      <div>
        <S.Info>
          <span>{textDay}</span>

          <S.Temperature onClick={handleToggleTemperatureType}>
            <span>{formattedTemperature}</span>
            <span>º{reverseTemperatureType}</span>
          </S.Temperature>
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
      </div>
    </S.Container>
  );
};

export default WeatherStatus;
