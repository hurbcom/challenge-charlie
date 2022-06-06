import { Weather } from "interfaces/Weather";

export const formatWeatherProperties = (weather: any) => {
  const formattedWeather: Weather = {
    temperature: Math.round(weather.main.temp),
    mood: formatMood(weather.weather[0].description),
    windSpeed: Math.round(weather.wind.speed),
    windDirection: getWindDirection(weather.wind.deg),
    humidity: Math.round(weather.main.humidity),
    pressure: Math.round(weather.main.pressure),
  };
  return formattedWeather;
};

export const formatMood = (mood: string) => {
  return mood && mood[0].toUpperCase() + mood.slice(1);
};

export const getWindDirection = (deg: number) => {
  const compassSector = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
    "N",
  ];
  return compassSector[(deg / 22.5).toFixed(0)];
};

export const shadeColor = (color: string, percent: number) => {
  const base = color.startsWith("#") ? 1 : 0;

  let r = parseInt(color.substring(base, 3), 16);
  let g = parseInt(color.substring(base + 2, 5), 16);
  let b = parseInt(color.substring(base + 4, 7), 16);

  r = Math.round(r / percent);
  g = Math.round(g / percent);
  b = Math.round(b / percent);

  r = r < 255 ? r : 255;
  g = g < 255 ? g : 255;
  b = b < 255 ? b : 255;

  const rr =
    r.toString(16).length === 1 ? `0${r.toString(16)}` : r.toString(16);
  const gg =
    g.toString(16).length === 1 ? `0${g.toString(16)}` : g.toString(16);
  const bb =
    b.toString(16).length === 1 ? `0${b.toString(16)}` : b.toString(16);

  return `#${rr}${gg}${bb}`;
};

export const convertCelsiusFahrenheit = (
  temperature: number,
  isCelsius: boolean
) => {
  if (isCelsius) {
    return (temperature * 9) / 5 + 32;
  }
  return ((temperature - 32) * 5) / 9;
};
