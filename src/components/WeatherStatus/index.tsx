import React, { Dispatch, SetStateAction, useMemo } from 'react';
import Image from 'next/image';
import { differenceInDays, isPast, isToday, isTomorrow } from 'date-fns';
import { IoIosRepeat } from 'react-icons/io';

import { Weather } from '~/@types/openWeather';
import { BackgroundColorsEnum, TemperatureTypeEnum } from '~/pages/home';
import { convertCelsiusToFahrenheit, convertWindDegreeToDirection } from '~/utils';
import WeatherStatusSkeleton from '~/components/WeatherStatus/skeleton';

import * as S from './styles';

export type WeatherStatusProps = {
  weather?: Weather;
  isLoading: boolean;
  isDetailed?: boolean;
  temperatureType: TemperatureTypeEnum;
  setTemperatureType: Dispatch<SetStateAction<TemperatureTypeEnum>>;
};

const WeatherStatus = ({
  weather,
  isLoading,
  temperatureType,
  isDetailed = false,
  setTemperatureType,
}: WeatherStatusProps) => {
  const textDay = useMemo(() => {
    const MAX_DAYS_TO_SHOW = 3;

    if (!weather) return false;

    const weatherDate = new Date(weather.date);

    const isBeforeToday = !isToday(weatherDate) && isPast(weatherDate);
    const isOutOfRangeOfDays = isBeforeToday || differenceInDays(weatherDate, new Date()) >= MAX_DAYS_TO_SHOW;

    if (isOutOfRangeOfDays) return false;

    if (isToday(weatherDate)) return 'HOJE';

    if (isTomorrow(weatherDate)) return 'AMANHÃ';

    return 'DEPOIS DE AMANHÃ';
  }, [weather]);

  const backgroundColor = useMemo(() => {
    if (!textDay || !weather) {
      return;
    }

    if (weather.temperature < 15) {
      return BackgroundColorsEnum.blue;
    }

    if (weather.temperature > 35) {
      return BackgroundColorsEnum.red;
    }

    return BackgroundColorsEnum.yellow;
  }, [weather, textDay]);

  const icon = useMemo(() => {
    return weather?.icon.replace(/\D/g, '');
  }, [weather]);

  const imageDimensions = useMemo(() => {
    if (isDetailed) return { width: 220, height: 220 };

    return { width: 80, height: 80 };
  }, [isDetailed]);

  const weatherDynamicInfo = useMemo(() => {
    if (!weather) return;

    const fahrenheitTemperature = convertCelsiusToFahrenheit(weather?.temperature);

    const info = {
      [TemperatureTypeEnum.celsius]: {
        temperature: weather?.temperature,
        type: TemperatureTypeEnum.celsius,
        revertedType: TemperatureTypeEnum.fahrenheit,
        prettyText: `${weather?.temperature}º${TemperatureTypeEnum.celsius}`,
      },
      [TemperatureTypeEnum.fahrenheit]: {
        temperature: fahrenheitTemperature,
        type: TemperatureTypeEnum.fahrenheit,
        revertedType: TemperatureTypeEnum.celsius,
        prettyText: `${fahrenheitTemperature}º${TemperatureTypeEnum.fahrenheit}`,
      },
    };

    return info[temperatureType];
  }, [temperatureType, weather]);

  const handleToggleTemperatureType = () => {
    if (!isDetailed) return;

    setTemperatureType((state) => {
      if (state === TemperatureTypeEnum.celsius) {
        return TemperatureTypeEnum.fahrenheit;
      }

      return TemperatureTypeEnum.celsius;
    });
  };

  if (!textDay || !weather) return <S.Container />;

  if (isLoading)
    return (
      <S.Container isLoading={isLoading}>
        <WeatherStatusSkeleton isDetailed={isDetailed} />
      </S.Container>
    );

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

          <S.Temperature onClick={handleToggleTemperatureType} isClickable={isDetailed}>
            <span>{weatherDynamicInfo?.prettyText}</span>

            {isDetailed && (
              <>
                <span>º{weatherDynamicInfo?.revertedType}</span>

                <IoIosRepeat size={24} />
              </>
            )}
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
