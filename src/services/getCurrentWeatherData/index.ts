import axios from 'axios';
import type GeoLocation from '../../interfaces/GeoLocationInterface';

import { type WeatherDataInterface } from '../../interfaces/WeatherDataInterface';

export default async function getCurrentWeatherData({
  latitude,
  longitude,
}: GeoLocation): Promise<WeatherDataInterface> {
  try {
    console.log(`longitude`, longitude);
    console.log(`latitude`, latitude);
    if (longitude && latitude) {
      const response = await axios.get<WeatherDataInterface>(
        `https://api.openweathermap.org/data/2.5/onecall`,
        {
          params: {
            appid: '772920597e4ec8f00de8d376dfb3f094',
            lat: latitude,
            lon: longitude,
            units: 'metric',
            exclude: 'minutely,hourly,alerts',
          },
        },
      );

      const { current, weather, daily } = response.data;

      console.log(`getCurrentWeatherData -response.data`, response.data);

      return { current, weather, daily };
    }
  } catch (error) {
    throw new Error('Faleid fetch infos from Open Weather API.');
  }
}
