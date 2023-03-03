import { mockRequestResponse } from '~/utils/mockRequestResponse';
import { mockedWeatherQuery, mockedWeatherResponse, mockedWeatherReturn } from '~/pages/api/weather/mockedData';

import weather, { GetWeatherResponse } from './index.api';

describe('API - weather', () => {
  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockedWeatherResponse),
      }),
    ) as jest.Mock;
  });

  beforeEach(() => {
    jest.setSystemTime(new Date(2023, 1, 23, 0, 0, 0));
  });

  it('should be able to get weather', async () => {
    const { req, res } = mockRequestResponse<GetWeatherResponse>({ query: mockedWeatherQuery });

    await weather(req, res);

    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toStrictEqual(mockedWeatherReturn);
  });

  it('should return error when method is not GET', async () => {
    const { req, res } = mockRequestResponse<GetWeatherResponse>({ method: 'POST' });

    await weather(req, res);

    expect(res.statusCode).toBe(405);
    expect(res._getJSONData()).toStrictEqual({ message: 'Method not allowed' });
  });

  it('should return error when latitude or longitude is not provided', async () => {
    const { req, res } = mockRequestResponse<GetWeatherResponse>({});

    await weather(req, res);

    expect(res.statusCode).toBe(400);
    expect(res._getJSONData()).toStrictEqual({ message: 'Wrong latitude or longitude' });
  });

  it('should return error has some error with external API', async () => {
    global.fetch = jest.fn(() => Promise.reject()) as jest.Mock;

    const { req, res } = mockRequestResponse<GetWeatherResponse>({ query: mockedWeatherQuery });

    await weather(req, res);

    expect(res.statusCode).toBe(503);
    expect(res._getJSONData()).toStrictEqual({ message: 'Something went wrong with weather API' });
  });

  it('should return error has some error with external API and return the error message', async () => {
    global.fetch = jest.fn(() =>
      Promise.reject({ message: 'Service Unavailable Please try again later.' }),
    ) as jest.Mock;

    const { req, res } = mockRequestResponse<GetWeatherResponse>({ query: mockedWeatherQuery });

    await weather(req, res);

    expect(res.statusCode).toBe(503);
    expect(res._getJSONData()).toStrictEqual({
      message: 'Something went wrong with weather API, Error: Service Unavailable Please try again later.',
    });
  });

  it('should return error when does not have any returned info', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
      }),
    ) as jest.Mock;

    const { req, res } = mockRequestResponse<GetWeatherResponse>({ query: mockedWeatherQuery });

    await weather(req, res);

    expect(res.statusCode).toBe(404);
    expect(res._getJSONData()).toStrictEqual({ message: 'Out of weather info' });
  });
});
