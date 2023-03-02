import axios from 'axios';
import { add } from 'date-fns';

import GeoLocation from '@interfaces/GeoLocationInterface';
import { DailyWeatherInfo, WeatherDataInterface } from '@interfaces/WeatherDataInterface';

export default async function getCurrentWeatherData({
  latitude,
  longitude
}: Omit<GeoLocation, 'locationName' | 'loading'>): Promise<WeatherDataInterface> {
  try {
    if (longitude && latitude) {
      const response = await axios.get<WeatherDataInterface>(`${process.env.REACT_APP_OPENWEATHER_API_URL}/onecall`, {
        params: {
          appid: `${process.env.REACT_APP_OPENWEATHER_API_KEY}`,
          lat: latitude,
          lon: longitude,
          units: 'metric',
          exclude: 'minutely,hourly,alerts',
          lang: 'pt_br'
        }
      });

      const { current, daily } = response.data;

      const nextDaysList = daily.reduce<DailyWeatherInfo>((list, item) => {
        const currentDate = new Date(current?.dt * 1000);
        const dateByDailyListItem = new Date(item.dt * 1000);

        const tomorrow = add(currentDate, {
          days: 1
        });

        const afterTomorrow = add(currentDate, {
          days: 2
        });

        if (dateByDailyListItem.getDay() === tomorrow.getDay()) {
          return { ...list, tomorrowTempWeather: item };
        }

        if (dateByDailyListItem.getDay() === afterTomorrow.getDay()) {
          return {
            ...list,
            afterTomorrowTempWeather: item
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
