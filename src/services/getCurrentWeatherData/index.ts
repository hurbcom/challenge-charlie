import axios from 'axios';
import { add } from 'date-fns';
import type GeoLocation from '../../interfaces/GeoLocationInterface';

import {
  type DailyWeatherInfo,
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
        `https://api.openweathermap.org/data/2.5/onecall`,
        {
          params: {
            appid: '772920597e4ec8f00de8d376dfb3f094',
            lat: latitude,
            lon: longitude,
            units: 'metric',
            exclude: 'minutely,hourly,alerts',
            lang: 'pt_br',
          },
        },
      );

      const { current, daily } = response.data;

      console.log(`getCurrentWeatherData -response.data`, response.data);

      const nextDaysList = daily.reduce<DailyWeatherInfo>((list, item) => {
        const currentDate = new Date(current?.dt * 1000);
        const dateByDailyListItem = new Date(item.dt * 1000);

        const tomorrow = add(currentDate, {
          days: 1,
        });

        const afterTomorrow = add(currentDate, {
          days: 2,
        });

        if (dateByDailyListItem.getDay() === tomorrow.getDay()) {
          return { ...list, tomorrowTempWeather: item };
        }

        if (dateByDailyListItem.getDay() === afterTomorrow.getDay()) {
          return {
            ...list,
            afterTomorrowTempWeather: item,
          };
        }

        return list;
      }, {});

      return { current, daily: nextDaysList };
    }
  } catch (error) {
    throw new Error('Faleid fetch infos from Open Weather API.');
  }
}
