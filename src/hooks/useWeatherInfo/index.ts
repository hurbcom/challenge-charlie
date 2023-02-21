import { differenceInDays, isPast, isToday, isTomorrow } from 'date-fns';
import { useMemo, useState } from 'react';

import { convertCelsiusToFahrenheit } from '~/utils';
import { WeatherStatusProps } from '~/components/WeatherStatus';

enum TemperatureTypeEnum {
  celsius = 'C',
  fahrenheit = 'F',
}

enum BackgroundColorsEnum {
  red = 'red',
  blue = 'blue',
  yellow = 'yellow',
}

export function useWeatherInfo({ date, weather }: WeatherStatusProps) {
  const [temperature, setTemperature] = useState({
    degrees: weather?.temperature ?? null,
    type: TemperatureTypeEnum.celsius,
  });

  const formattedTemperature = `${temperature.degrees}º${temperature.type}`;

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
