import client from '../../api';
import { TLocation } from '../location/types';
import { forecastSerialize, weatherSerialize } from './serializer';
import { IForecast, IForecastData, IWeatheData, IWeather } from './types';

export const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';

const getForecast = async (
  latitude: TLocation['latitude'],
  longitude: TLocation['longitude'],
): Promise<IForecast> => {
  const { data } = await client.get<IForecastData>(`${API_BASE_URL}/onecall`, {
    params: {
      lat: latitude,
      lon: longitude,
      exclude: 'hourly,minutely,alerts',
      units: 'metric',
      lang: 'pt_br',
      appid: process.env.OPEN_WEATHER_KEY,
    },
  });

  return forecastSerialize(data);
};

const getWeather = async (location: string): Promise<IWeather> => {
  const { data } = await client.get<IWeatheData>(`${API_BASE_URL}/weather`, {
    params: {
      q: location,
      APPID: process.env.OPEN_WEATHER_KEY,
      units: 'metric',
      lang: 'pt_br',
      cnt: 24,
    },
  });

  const forecast = await getForecast(data.coord.lat, data.coord.lon);

  return weatherSerialize(forecast, data);
};

export default { getWeather, getForecast };
