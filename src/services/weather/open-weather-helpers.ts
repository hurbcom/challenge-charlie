import { getColorByTemperatureAndIndex } from '../../helpers/colors';
import { IOpenWeatherApi } from '../../helpers/contracts';
import { addDays, isMidday, isWithinPeriod } from '../../helpers/datetime';
import { WeatherInformation } from '../../helpers/models';

export const formatOpenWeatherApiUrl = (
  term: string,
  service: IOpenWeatherApi.ServiceType
) => {
  const url = new URL(`${process.env.OPEN_WEATHER_API_URL}${service}`);
  url.searchParams.append('q', term);
  url.searchParams.append('appid', process.env.OPEN_WEATHER_API_KEY as string);
  url.searchParams.append('units', 'metric');
  url.searchParams.append('lang', 'pt_br');
  url.searchParams.append('cnt', '24');

  return url;
};

export const filterOpenWeatherNextDaysApiResult = (
  data: IOpenWeatherApi.WeatherObjectResult
) => {
  const tomorrow = addDays(new Date(), 1);
  const dateCurrentItem = new Date(data.dt_txt);

  if (!isWithinPeriod(dateCurrentItem, tomorrow, 2)) {
    return false;
  }
  if (!isMidday(new Date(data.dt_txt))) {
    return false;
  }

  return true;
};

const daysMap: Record<number, string> = {
  0: 'hoje',
  1: 'amanhã',
  2: 'depois de amanhã',
};

export const mapOpenWeatherObjectApiResult = (
  data: IOpenWeatherApi.WeatherObjectResult,
  index: number = 0
): WeatherInformation => {
  return {
    day: data.dt_txt,
    temperature: `${data.main.temp}`,
    description: data.weather[0].description,
    wind: `${data.wind.speed * 3.6}`, // add helper to convert mt/s - km/h
    humidity: `${data.main.humidity}%`,
    pressure: `${data.main.pressure}hPa`,
    icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
    colors: getColorByTemperatureAndIndex(data.main.temp, index),
  };
};
