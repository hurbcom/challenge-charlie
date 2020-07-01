/**
 *
 * @param temperature
 *
 *
 * Receives the temperature in Kelvin and returns the temperature in both celsius, position 0, and fahrenheit, position 1
 */

function treatTemperature(temperature: number): number[] {
  return [
    Number((temperature - 273.15).toFixed()),
    Number((((temperature - 273.15) * 9) / 5 + 32).toFixed()),
  ];
}

export default treatTemperature;
