import { Weather } from "interfaces/Weather";

export const formatWeatherProperties = (weather: any) => {
  const formattedWeather: Weather = {
    temperature: weather.main.temp,
    mood: formatMood(weather.weather[0].description),
    windSpeed: weather.wind.speed,
    windDirection: getWindDirection(weather.wind.deg),
    humidity: weather.main.humidity,
    pressure: weather.main.pressure,
    icon: weather.weather[0].icon,
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
  return compassSector[(deg / 22.5).toFixed(0) as any];
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
    return Math.round((temperature * 9) / 5 + 32);
  }
  return Math.round(((temperature - 32) * 5) / 9);
};

export const defineBackgroundColor = (
  temperature: number,
  isCelsius: boolean
) => {
  let backgroundColor: string = "";
  if (isCelsius) {
    if (temperature < 35 && temperature > 15) {
      backgroundColor = "#faca04";
      return backgroundColor;
    }
    if (temperature < 15) {
      backgroundColor = "#0080cd";
      return backgroundColor;
    }
    if (temperature > 35) {
      backgroundColor = "#cc3923";
      return backgroundColor;
    }
  }
  if (!isCelsius) {
    if (temperature < 95 && temperature > 59) {
      backgroundColor = "#faca04";
      return backgroundColor;
    }
    if (temperature < 59) {
      backgroundColor = "#0080cd";
      return backgroundColor;
    }
    if (temperature > 95) {
      backgroundColor = "#cc3923";
      return backgroundColor;
    }
  }

  return backgroundColor;
};
