import React, { useMemo, useState } from 'react';
import { differenceInDays, isPast, isToday, isTomorrow } from 'date-fns';

import { Weather } from '~/@types/openWeather';
import { convertCelsiusToFahrenheit } from '~/utils/convertCelsiusToFahrenheit';

import * as S from './styles';

enum TemperatureTypeEnum {
  celsius = 'C',
  fahrenheit = 'F',
}

export type WeatherStatusProps = {
  date: Date;
  weather: Weather;
};

/* TODO:
 - [] Adicionar os 3 ícones pra cada clima
 - [] Estilizações
 - [] Fazer a parte com as infos detalhadas
 - [] Fazer a lógica das cores
*/

const WeatherStatus = ({ date, weather }: WeatherStatusProps) => {
  const [temperature, setTemperature] = useState({
    degrees: weather.temperature,
    type: TemperatureTypeEnum.celsius,
  });

  const formattedTemperature = `${temperature.degrees}º${temperature.type}`;

  const handleToggleTemperatureType = () => {
    setTemperature((state) => {
      if (state.type === TemperatureTypeEnum.celsius) {
        return {
          degrees: convertCelsiusToFahrenheit(weather.temperature),
          type: TemperatureTypeEnum.fahrenheit,
        };
      }

      return {
        degrees: weather.temperature,
        type: TemperatureTypeEnum.celsius,
      };
    });
  };

  const textDay = useMemo(() => {
    const MAX_DAYS_TO_SHOW = 3;

    const isBeforeToday = !isToday(date) && isPast(date);
    const isOutOfRangeOfDays = isBeforeToday || differenceInDays(date, new Date()) >= MAX_DAYS_TO_SHOW;

    if (isOutOfRangeOfDays) {
      return false;
    }

    if (isToday(date)) {
      return 'Hoje';
    }

    if (isTomorrow(date)) {
      return 'Amanhã';
    }

    return 'Depois de amanhã';
  }, [date]);

  if (!textDay) {
    return <></>;
  }

  return (
    <S.Container>
      <S.Info>
        <span>{textDay}</span>

        <S.Temperature onClick={handleToggleTemperatureType}>{formattedTemperature}</S.Temperature>
      </S.Info>
    </S.Container>
  );
};

export default WeatherStatus;
