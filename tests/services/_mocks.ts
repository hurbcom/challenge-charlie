import { IOpenWeatherApi, IBingApi, IOpenCageApi } from '../../src/helpers/contracts';

export const mockCurrentWeatherApiResult = {
  weather: [
    {
      description: 'string',
      icon: 'string',
    },
  ],
  main: {
    temp: 12,
    pressure: 1002,
    humidity: 60,
  },
  wind: {
    speed: 2,
    deg: 45,
  },
  dt: 1675775295252,
  dt_txt: '2023-02-07 12:00:00',
} as IOpenWeatherApi.WeatherObjectResult;

export const mockWeatherForecastApiResult = {
  list: [mockCurrentWeatherApiResult],
} as IOpenWeatherApi.WeatherForecastResult;

export const mockBingApiResult = {
  images: [
    {
      title: 'any title',
      url: 'bing.url',
      copyright: '',
    },
  ],
} as IBingApi.CoverImageResult;

export const mockGeocodeApiResult = {
  results: [
    {
      components: {
        city: 'any city',
        state: 'any state',
      },
    },
  ],
} as IOpenCageApi.CityByCoordinatesResult;
