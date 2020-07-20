export const weatherPerDay = (day) => {
  const temp = day.main.temp;

  day.celcius = Math.round(temp - 273.15);
  day.fahrenheit = Math.round((temp - 273.15) * 1.8 + 32);

  day.label = _checkWeatherLabel(day.celcius);

  return day;
};

const _checkWeatherLabel = (temp) => {
  if (temp < 15) {
    return "cold";
  } else if (temp > 35) {
    return "sunny";
  }

  return "cloudy";
}