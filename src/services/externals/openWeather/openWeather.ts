import { get } from '../../api';

import { ICoordinates, IOpenWeather } from './interface';

export const getWeather = ({ lat, lng }: ICoordinates) => {
  return get({
    url: `onecall?lat=${lat}&lon=${lng}&units=metric&exclude=hourly,minutely,alerts&lang=pt_br&APPID=${process.env.openWeatherKey}`,
    baseUrl: process.env.openWeatherUrl
  })
    .then((data: IOpenWeather) => {
      return {
        current: data?.current,
        tomorrow: data?.daily?.[1],
        afterTomorrow: data?.daily?.[2]
      }
    })
    .catch((err) => err);
};
