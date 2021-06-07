import { TemperatureUnit } from '../global-types';

export const getMetrictByTemperatureUnit = (temperatureUnit: TemperatureUnit) => {
  switch (temperatureUnit) {
    case 'C':
      return 'metric';
    case 'F':
      return 'imperial';
    default:
      return 'metric';
  }
};
