import { TemperatureUnit } from '../global-types';

export const getTemperatureWithCelsius = (temperature: number | undefined, temperatureUnit: TemperatureUnit) => {
  if (!temperature) return undefined;

  if (temperatureUnit === 'F') {
    return (temperature - 32) / 1.8;
  }

  return temperature;
};
