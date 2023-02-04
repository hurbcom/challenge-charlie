import { IOpenWeatherApi } from '../../helpers/contracts';
import { addDays, isMidday, isWithinPeriod } from '../../helpers/datetime';
import { TemperatureScales, WeatherInformation } from '../../helpers/models';

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

export const mapOpenWeatherObjectApiResult = (
  data: IOpenWeatherApi.WeatherObjectResult
): WeatherInformation => {
  return {
    day: data.dt,
    temperature: {
      value: Math.round(data.main.temp),
      scale: TemperatureScales.DEFAULT,
      label: '',
    },
    description: data.weather[0].description,
    wind: data.wind.speed,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    icon: data.weather[0].icon,
  };
};
