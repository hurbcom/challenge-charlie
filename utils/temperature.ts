export const kelvinToCelsius = (temperature: number) => {
  return temperature - 273.15;
};

export const kelvinToFahrenheit = (temperature: number) => {
  return (kelvinToCelsius(temperature) * 9) / 5 + 32;
};
