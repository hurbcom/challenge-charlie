import MockAdapter from 'axios-mock-adapter';
import client from '../../api';

import weather, { API_BASE_URL } from '.';
import { forecastSerialize, weatherSerialize } from './serializer';
import { IForecastData } from './types';

const forecastResponse = {
  current: {
    temp: 14.03,
    pressure: 987,
    humidity: 87,
    clouds: 75,
    visibility: 10000,
    // eslint-disable-next-line camelcase
    wind_speed: 4.12,
    weather: [
      {
        main: 'Clouds',
        description: 'nublado',
      },
    ],
    coord: {
      lat: -111,
      lon: -222,
    },
  },
  daily: [
    {
      temp: {
        min: 9.93,
        max: 17.26,
      },
      weather: [
        {
          main: 'Clouds',
          description: 'nublado',
        },
      ],
    },
    {
      temp: {
        min: 9.93,
        max: 17.26,
      },
      weather: [
        {
          main: 'Clouds',
          description: 'nublado',
        },
      ],
    },
  ],
} as IForecastData;

const fixtures = {
  forecast: {
    response: forecastResponse,
  },
  weather: {
    response: {
      name: 'LocationName',
      coord: {
        lat: -111,
        lon: -111,
      },
    },
  },
};

describe('requests', () => {
  let mock: MockAdapter;
  const lat = -123;
  const lon = -123;
  const location = 'Rio de Janeiro';

  describe('getForecast()', () => {
    describe('when the GET "/onecall" request is successful with status 200', () => {
      beforeEach(() => {
        mock = new MockAdapter(client);

        mock.onGet(`${API_BASE_URL}/onecall`).reply(200, fixtures.forecast.response);
      });

      afterEach(() => {
        mock.restore();
      });

      it('should return the request response', async () => {
        const res = await weather.getForecast(lat, lon);

        expect(res).toEqual(forecastSerialize(fixtures.forecast.response));
      });
    });
  });

  describe('getWeather()', () => {
    describe('when the GET "/weather" request is successful with status 200', () => {
      beforeEach(() => {
        mock = new MockAdapter(client);

        // getWeather dependence
        mock.onGet(`${API_BASE_URL}/onecall`).reply(200, fixtures.forecast.response);

        mock.onGet(`${API_BASE_URL}/weather`).reply(200, fixtures.weather.response);
      });

      afterEach(() => {
        mock.restore();
      });

      it('should return the request response', async () => {
        const res = await weather.getWeather(location);

        expect(res).toEqual(
          weatherSerialize(
            forecastSerialize(fixtures.forecast.response),
            fixtures.weather.response,
          ),
        );
      });
    });
  });

  it('should have API_BASE_URL equal the value', () => {
    expect(API_BASE_URL).toEqual('https://api.openweathermap.org/data/2.5');
  });
});
