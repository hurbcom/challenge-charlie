import axios from 'axios';
import { renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';

import constants from '../../constants';
import useWeatherAPI from '../useWeatherAPI';
import { weatherApiResponse } from '../__mocks__/weatherApiResponse';

const axiosMock = new MockAdapter(axios);

beforeAll(() => {
  axiosMock
    .onGet(
      `${constants.WEATHER_API}data/2.5/onecall?exclude=hourly,minutely&appid=${constants.WEATHER_API_APP_ID}&lang=pt_br&units=metric&lat=-22.9068&lon=-43.1729`,
    )
    .reply(200, weatherApiResponse);
});

describe('useWeatherAPI hook', () => {
  it('should return a weather object', async () => {
    const { result, waitForValueToChange } = renderHook(() =>
      useWeatherAPI({ lat: -22.9068, lon: -43.1729, lang: 'pt_br', units: 'metric' }),
    );

    await waitForValueToChange(() => result.current.weatherResume);

    expect(result.current.weatherResume).toMatchObject({
      current: {
        date: '02/06/2021',
        temperature: 26.26,
        pressure: 1013,
        humidity: 70,
        windSpeed: 2.06,
        description: 'céu limpo',
      },
      tomorrow: {
        date: '03/06/2021',
        temperature: 26.47,
        pressure: 1019,
        humidity: 62,
        windSpeed: 3.21,
        description: 'céu limpo',
      },
      afterTomorrow: {
        date: '04/06/2021',
        temperature: 24.47,
        pressure: 1023,
        humidity: 71,
        windSpeed: 3.64,
        description: 'céu limpo',
      },
    });
  });
});

afterAll(() => {
  axiosMock.reset();
});
