import { useState } from 'react';
import { kelvinToCelsius, kelvinToFahrenheit } from '../utils/temperature';

export enum TemperatureUnit {
  CELSIUS,
  FAHRENHEIT,
}

export const useTemperatureFormat = () => {
  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>(TemperatureUnit.CELSIUS);

  const toggleUnit = () => {
    switch (temperatureUnit) {
      case TemperatureUnit.CELSIUS:
        return setTemperatureUnit(TemperatureUnit.FAHRENHEIT);
      case TemperatureUnit.FAHRENHEIT:
        return setTemperatureUnit(TemperatureUnit.CELSIUS);
    }
  };

  const getUnitSymbol = () => {
    switch (temperatureUnit) {
      case TemperatureUnit.CELSIUS:
        return 'ºC';
      case TemperatureUnit.FAHRENHEIT:
        return 'ºF';
    }
  };

  const formatTemperature = (temp: number) => {
    if (!temp) return 0;
    switch (temperatureUnit) {
      case TemperatureUnit.CELSIUS:
        return Math.round(kelvinToCelsius(temp));
      case TemperatureUnit.FAHRENHEIT:
        return Math.round(kelvinToFahrenheit(temp));
    }
  };

  return {
    toggleUnit,
    unitSymbol: getUnitSymbol(),
    formatTemperature,
  };
};
