import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import constants from '../../constants';
import useWeatherAPI from '../useWeatherAPI';
import { weatherApiResponse } from '../__mocks__/weatherApiResponse';

const axiosMock = new MockAdapter(axios);

beforeAll(() => {
  axiosMock
    .onGet(
      `${constants.WEATHER_API}/data/2.5/onecall?lat=-22.906847&lon=-43.172897&exclude=hourly,minutely&appid=7ba73e0eb8efe773ed08bfd0627f07b8&lang=pt_br&units=metric`,
    )
    .reply(200, weatherApiResponse);
});

describe('useWeatherAPI hook', () => {
  it('should return a weather object', () => {
    const { result } = renderHook(() => useWeatherAPI());
    expect(typeof result.current.weather).toBe('object');
    expect(result.current.weather).toBe({
      current: {
        date: '02/06/2021',
        temp: 26,
        pressure: 1013,
        humidity: 70,
        windSpeed: 2.06,
        description: 'céu limpo',
      },
      tomorrow: {
        date: '03/06/2021',
        temp: 26,
        pressure: 1019,
        humidity: 62,
        windSpeed: 3.21,
        description: 'céu limpo',
      },
      afterTomorrow: {
        date: '04/06/2021',
        temp: 24,
        pressure: 1023,
        humidity: 71,
        windSpeed: 3.64,
        description: 'céu limpo',
      },
    });
  });
});
