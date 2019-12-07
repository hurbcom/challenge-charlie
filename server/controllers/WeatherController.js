/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import { getDay, parseISO } from 'date-fns';
import 'dotenv/config';
import api from '../services/ApiOpenWeather';
import model from '../model/default';

function handleUnusedData(datas) {
  return datas.filter((current, index, array) => {
    if (index !== 0) {
      const prevDate = getDay(parseISO(array[index - 1].dt_txt));
      const currentDate = getDay(parseISO(current.dt_txt));

      if (prevDate !== currentDate) return current;
    }
    if (index === 0) return current;
  });
}

function formatWeather(datas, unit) {
  const weatherData = [];

  function formatCardinalPoint(deg) {
    if (deg === 0 || deg === 360) return 'N';
    if (deg > 0 && deg < 90) return 'NE';
    if (deg === 90) return 'L';
    if (deg > 90 && deg < 180) return 'SE';
    if (deg === 180) return 'S';
    if (deg > 180 && deg < 270) return 'SO';
    if (deg === 270) return 'O';
    if (deg > 270 && deg < 360) return 'NO';
  }

  function formatWindSpeed(speed) {
    if (unit === 'metric') {
      return `${Math.round(speed * 4.194, 2)}km/h`;
    }
    return `${Math.round(speed, 2)}mi/h`;
  }

  function formatTemperature(temp) {
    if (unit === 'metric') {
      return `${temp}ºC`;
    }
    return `${temp}ºF`;
  }

  function tempImperialToMetric(temp) {
    if (unit === 'imperial') return ((temp - 32) * 5) / 9;
    return temp;
  }

  datas.forEach(data => {
    const formattedHumidity = `${data.main.humidity}%`;
    const formattedPressure = `${data.main.pressure}hPa`;

    weatherData.push({
      icon: model.icon[data.weather[0].icon],
      temp: tempImperialToMetric(data.main.temp),
      formattedTemp: formatTemperature(data.main.temp),
      description: data.weather[0].description,
      windSpeed: formatWindSpeed(data.wind.speed, unit),
      windDirection: formatCardinalPoint(data.wind.deg),
      humidity: formattedHumidity,
      pressure: formattedPressure,
    });
  });

  return weatherData;
}

export default async function WeatherController(req, res) {
  const { location, unit } = req.query;
  const { data } = await api.get(
    `/forecast?q=${location},BR&APPID=${process.env.APPID}&units=${unit}&cnt=17&lang=pt`
  );
  const unusedData = handleUnusedData(data.list);
  const formattedWeather = formatWeather(unusedData, unit);

  return res.json(formattedWeather);
}
