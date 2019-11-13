export const celsiusToFahrenheit = (temperature) => {
  const result = (temperature * 9 / 5) + 32;
  return result;
}

export const fahrenheitToCelsius = (temperature) => {
  const result = (temperature - 32) * 5 / 9;
  return result;
}