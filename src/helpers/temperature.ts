import { TemperatureObject, TemperatureScales } from './models';

function convertTemperature(value: number) {
  // formula reference: https://www.almanac.com/temperature-conversion-celsius-fahrenheit

  function toCelsius() {
    return (value - 32) * (5 / 9);
  }
  function toFahrenheit() {
    return value * (9 / 5) + 32;
  }

  return {
    toCelsius,
    toFahrenheit,
  };
}

function getTemperatureValueByScale(
  temperature: TemperatureObject,
  scale: TemperatureScales
) {
  switch (scale) {
    case TemperatureScales.CELSIUS:
      return temperature.scale === TemperatureScales.CELSIUS
        ? temperature.value
        : convertTemperature(temperature.value).toCelsius();

    case TemperatureScales.FAHRENHEIT:
      return temperature.scale === TemperatureScales.FAHRENHEIT
        ? temperature.value
        : convertTemperature(temperature.value).toFahrenheit();

    default:
      return temperature.value;
  }
}

export const handleTemperatureObject = (
  temperature: TemperatureObject,
  scale: TemperatureScales
): TemperatureObject => {
  const value = Math.round(getTemperatureValueByScale(temperature, scale));
  const label = `${value}${scale}`;

  return {
    value,
    scale,
    label,
  };
};
