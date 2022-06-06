import { Weather } from "interfaces/Weather";

export const formatWeatherProperties = (weather: any) => {
  const formattedWeather: Weather = {
    temperature: weather.main.temp.toFixed(0),
    mood: formatMood(weather.weather[0].description),
    windSpeed: weather.wind.speed.toFixed(0),
    windDirection: getWindDirection(weather.wind.deg),
    humidity: weather.main.humidity.toFixed(0),
    pressure: weather.main.pressure.toFixed(0),
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
