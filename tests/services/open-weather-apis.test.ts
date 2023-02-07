import { httpService } from '../../src/services/_http';
import {
  getCurrentWeatherByCity,
  getWeatherNextDaysByCity,
} from '../../src/services/weather/open-weather-apis';
import * as OpenWeatherHelpers from '../../src/services/weather/open-weather-helpers';
import { IOpenWeatherApi } from '../../src/helpers/contracts';
import { mockCurrentWeatherApiResult, mockWeatherForecastApiResult } from './_mocks';

describe('Open Weather Api Service', () => {
  const cityName = 'anyCity';

  describe('getCurrentWeatherByCity', () => {
    test('should call http service with correct params', async () => {
      const url = OpenWeatherHelpers.formatOpenWeatherApiUrl(
        cityName,
        IOpenWeatherApi.ServiceType.WEATHER
      );

      const spay = jest
        .spyOn(httpService, 'get')
        .mockImplementationOnce(() => Promise.resolve(null));

      await getCurrentWeatherByCity({ cityName });

      expect(spay).toBeCalledWith(url);
    });

    test('should return mapped api result', async () => {
      jest
        .spyOn(httpService, 'get')
        .mockImplementationOnce(() => Promise.resolve(mockCurrentWeatherApiResult));

      const result = await getCurrentWeatherByCity({ cityName });
      const resultMapped = OpenWeatherHelpers.mapOpenWeatherObjectApiResult(
        mockCurrentWeatherApiResult
      );

      expect(result).toEqual(resultMapped);
    });
  });

  describe('getWeatherNextDaysByCity', () => {
    test('should call http service with correct params', async () => {
      const url = OpenWeatherHelpers.formatOpenWeatherApiUrl(
        cityName,
        IOpenWeatherApi.ServiceType.FORECAST
      );

      const spay = jest
        .spyOn(httpService, 'get')
        .mockImplementationOnce(() => Promise.resolve(null));

      await getWeatherNextDaysByCity({ cityName });

      expect(spay).toBeCalledWith(url);
    });

    test('should return mapped api result', async () => {
      jest
        .spyOn(httpService, 'get')
        .mockImplementationOnce(() => Promise.resolve(mockWeatherForecastApiResult));

      jest
        .spyOn(OpenWeatherHelpers, 'filterOpenWeatherNextDaysApiResult')
        .mockImplementationOnce(() => true);

      const result = await getWeatherNextDaysByCity({ cityName });
      const resultMapped = mockWeatherForecastApiResult.list.map(
        OpenWeatherHelpers.mapOpenWeatherObjectApiResult
      );

      expect(result).toEqual(resultMapped);
    });
  });
});
