import { mockRequestResponse } from '~/utils';

import wallpaper, { GetWallpaperResponse } from './index.api';

describe('API - wallpaper', () => {
  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            images: [
              {
                url: '/my-image',
                copyright: 'Today image',
              },
            ],
          }),
      }),
    ) as jest.Mock;
  });

  it('should be able to get wallpaper', async () => {
    const { req, res } = mockRequestResponse<GetWallpaperResponse>();

    await wallpaper(req, res);

    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toStrictEqual({
      src: 'https://www.bing.com/my-image',
      alt: 'Today image',
    });
  });

  it('should return error when method is not GET', async () => {
    const { req, res } = mockRequestResponse<GetWallpaperResponse>('POST');

    await wallpaper(req, res);

    expect(res.statusCode).toBe(405);
    expect(res._getJSONData()).toStrictEqual({ message: 'Method not allowed' });
  });

  it('should be able to get wallpaper', async () => {
    const { req, res } = mockRequestResponse<GetWallpaperResponse>();

    await wallpaper(req, res);

    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toStrictEqual({
      src: 'https://www.bing.com/my-image',
      alt: 'Today image',
    });
  });

  it('should return error has some error with external API', async () => {
    global.fetch = jest.fn(() => Promise.reject()) as jest.Mock;

    const { req, res } = mockRequestResponse<GetWallpaperResponse>();

    await wallpaper(req, res);

    expect(res.statusCode).toBe(503);
    expect(res._getJSONData()).toStrictEqual({ message: 'Something went wrong with wallpaper supplier' });
  });

  it('should return error has some error with external API and return the error message', async () => {
    global.fetch = jest.fn(() =>
      Promise.reject({ message: 'Service Unavailable Please try again later.' }),
    ) as jest.Mock;

    const { req, res } = mockRequestResponse<GetWallpaperResponse>();

    await wallpaper(req, res);

    expect(res.statusCode).toBe(503);
    expect(res._getJSONData()).toStrictEqual({
      message: 'Something went wrong with wallpaper supplier, Error: Service Unavailable Please try again later.',
    });
  });

  it('should return error when does not have any returned image', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            images: [],
          }),
      }),
    ) as jest.Mock;

    const { req, res } = mockRequestResponse<GetWallpaperResponse>();

    await wallpaper(req, res);

    expect(res.statusCode).toBe(404);
    expect(res._getJSONData()).toStrictEqual({ message: 'Out of wallpapers' });
  });
});
