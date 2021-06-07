import { TemperatureUnit } from '../global-types';

export const getTemperatureWithCelsius = (
  temperature: number | undefined = 25,
  temperatureUnit: TemperatureUnit,
) => {
  if (temperatureUnit === 'F') {
    return (temperature - 32) / 1.8;
  }

  return temperature;
};
