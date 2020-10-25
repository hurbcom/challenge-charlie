import { Api } from 'api/client';
import { retryBackoff } from 'lib/exponentialBackoff';
import { WeatherData } from './types';
import { EMPTY } from 'rxjs';
import { map } from 'rxjs/operators';

export const openWeatherExternal = {
  // fetchWeatherData: ({ locationName }: { locationName: string }) => {
  //   if (!locationName) return EMPTY;
  //   return Api.get<WeatherData>(
  //     `/data/2.5/weather?q=${locationName}&APPID=${process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY}`,
  //     {
  //       baseURL: process.env.NEXT_PUBLIC_OPEN_WEATHER_URL,
  //       validateStatus: status => {
  //         if (status < 400 || status === 404) return true;
  //       },
  //     },
  //   ).pipe(
  //     retryBackoff({
  //       initialInterval: 3000,
  //     }),
  //     map(payload => payload),
  //   );
  // },
    fetchWeatherData: ({ lat, long }: { lat: number, long: number }) => {
      if (!lat || !long) return EMPTY;
      return Api.get<WeatherData>(
        `/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely,alerts&lang=pt_br&APPID=${process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY}`,
        {
          baseURL: process.env.NEXT_PUBLIC_OPEN_WEATHER_URL,
        },
      ).pipe(
        // retryBackoff({
        //   initialInterval: 3000,
        // }),
        map(payload => payload),
      );
    },

};
