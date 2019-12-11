import { tempToCelsius, formatTemp } from './formatTemperature';
import formatWindSpeed from './formatWindSpeed';
import formatCardinalPoint from './formatCardinalPoint';

export default function formatWeather(datas, unit) {
  const weatherData = [];

  datas.forEach(data => {
    weatherData.push({
      icon: data.weather[0].icon,
      temp: tempToCelsius(data.main.temp, unit),
      formattedTemp: formatTemp(data.main.temp, unit),
      description: data.weather[0].description,
      windSpeed: formatWindSpeed(data.wind.speed, unit),
      windDirection: formatCardinalPoint(data.wind.deg),
      humidity: `${data.main.humidity}%`,
      pressure: `${data.main.pressure}hPa`,
    });
  });

  return weatherData;
}
