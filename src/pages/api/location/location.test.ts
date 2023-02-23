import { OpenCageAPIResponse } from '~/@types';
import { mockRequestResponse } from '~/utils/mockRequestResponse';

import location, { GetLocationResponse } from './index.api';

const defaultQuery = {
  query: { location: 'Itapetininga' },
};

describe('API - location', () => {
  beforeAll(() => {
    const response: OpenCageAPIResponse = {
      results: [
        {
          components: {
            city: 'Itapetininga',
            state: 'São Paulo',
          },
          geometry: {
            lat: -23.588607,
            lng: -48.048326,
          },
        },
      ],
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(response),
      }),
    ) as jest.Mock;
  });

  it('should be able to get location', async () => {
    const { req, res } = mockRequestResponse<GetLocationResponse>(defaultQuery);

    await location(req, res);

    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toStrictEqual([
      {
        state: 'São Paulo',
        city: 'Itapetininga',
        latitude: -23.588607,
        longitude: -48.048326,
      },
    ]);
  });

  it('should return error when method is not GET', async () => {
    const { req, res } = mockRequestResponse<GetLocationResponse>({ method: 'POST' });

    await location(req, res);

    expect(res.statusCode).toBe(405);
    expect(res._getJSONData()).toStrictEqual({ message: 'Method not allowed' });
  });

  it('should return error when latitude or longitude is not provided', async () => {
    const { req, res } = mockRequestResponse<GetLocationResponse>({});

    await location(req, res);

    expect(res.statusCode).toBe(400);
    expect(res._getJSONData()).toStrictEqual({ message: 'Empty location' });
  });

  it('should return error has some error with external API', async () => {
    global.fetch = jest.fn(() => Promise.reject()) as jest.Mock;

    const { req, res } = mockRequestResponse<GetLocationResponse>(defaultQuery);

    await location(req, res);

    expect(res.statusCode).toBe(503);
    expect(res._getJSONData()).toStrictEqual({ message: 'Something went wrong with location API' });
  });

  it('should return error has some error with external API and return the error message', async () => {
    global.fetch = jest.fn(() =>
      Promise.reject({ message: 'Service Unavailable Please try again later.' }),
    ) as jest.Mock;

    const { req, res } = mockRequestResponse<GetLocationResponse>(defaultQuery);

    await location(req, res);

    expect(res.statusCode).toBe(503);
    expect(res._getJSONData()).toStrictEqual({
      message: 'Something went wrong with location API, Error: Service Unavailable Please try again later.',
    });
  });

  it('should return error when does not have any returned location', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            images: [],
          }),
      }),
    ) as jest.Mock;

    const { req, res } = mockRequestResponse<GetLocationResponse>(defaultQuery);

    await location(req, res);

    expect(res.statusCode).toBe(404);
    expect(res._getJSONData()).toStrictEqual({ message: 'Out of location info' });
  });
});
