import axios from 'axios';

import {
  type GeoLocation,
  type WeatherDataInterface,
} from '../../interfaces/WeatherDataInterface';

export default async function getCurrentWeatherData({
  latitude,
  longitude,
}: GeoLocation): Promise<WeatherDataInterface> {
  try {
    console.log(`longitude`, longitude);
    console.log(`latitude`, latitude);
    if (longitude && latitude) {
      const response = await axios.get<WeatherDataInterface>(
        `http://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            appid: '3a894fe16271c4e9197240a3775204cf',
            lat: latitude,
            lon: longitude,
          },
        },
      );

      const { weather, wind, main } = response.data;

      return { weather, wind, main };
    }
  } catch (error) {
    throw new Error('Faleid fetch infos from Open Weather API.');
  }
}
