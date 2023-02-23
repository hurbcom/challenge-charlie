import { differenceInDays, isPast, isToday, isTomorrow } from 'date-fns';
import { useMemo, useState } from 'react';

import { convertCelsiusToFahrenheit } from '~/utils';
import { WeatherStatusProps } from '~/components/WeatherStatus';

enum TemperatureTypeEnum {
  celsius = 'C',
  fahrenheit = 'F',
}

export enum BackgroundColorsEnum {
  red = 'red',
  blue = 'blue',
  yellow = 'yellow',
}

export function useWeatherInfo({ weather }: WeatherStatusProps) {
  const [temperature, setTemperature] = useState({
    degrees: weather?.temperature ?? null,
    type: TemperatureTypeEnum.celsius,
  });

  const formattedTemperature = `${temperature.degrees}º${temperature.type}`;

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

  const handleToggleTemperatureType = () => {
    if (!weather) return;

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

  return {
    icon,
    textDay,
    backgroundColor,
    formattedTemperature,
    handleToggleTemperatureType,
  };
}
