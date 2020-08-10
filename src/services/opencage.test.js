import OpenCage from './opencage';

import { wait } from '@testing-library/react';

import { rest } from 'msw';
import { setupServer } from 'msw/node'

const server = setupServer(
    rest.get('https://api.opencagedata.com/geocode/v1/json', (req, res, ctx) => {
        return res(ctx.json({
            results: [{
                geometry: true,
                components: { city: true}
            }]
        }));
    })
);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

const OpenC = new OpenCage('c63386b4f77e46de817bdf94f552cddf')

test('createUrl returns url with parameters', () => {
    const url = OpenC.createUrl('123,321');
    const expectedUrl = 'https://api.opencagedata.com/geocode/v1/json?q=123%2C321&key=c63386b4f77e46de817bdf94f552cddf&language=en&limit=1&no_annotations=1';

    expect(url.href).toEqual(expectedUrl);
});

test('getCacheKey returns cache key', () => {
    const cacheKey = OpenC.getCacheKey('123,321');
    const expectedCacheKey = 'opencage_123321';

    expect(cacheKey).toEqual(expectedCacheKey);
});

test('getFromCache returns cache from localStorage', () => {
    OpenC.cacheKey = 'test';
    const now = new Date();
    now.setYear(now.getFullYear() + 1);

    window.localStorage.setItem('test', JSON.stringify({
        expire: now,
        data: 'test'
    }));

    const cache = OpenC.getFromCache();

    expect(cache).toEqual('test');
});

test('getFromCache should remove expired caches from localStorage', () => {
    OpenC.cacheKey = 'test';
    const now = new Date();
    now.setYear(now.getFullYear() - 1);

    window.localStorage.setItem('test', JSON.stringify({
        expire: now,
        data: 'test2'
    }));

    const cache = OpenC.getFromCache();

    expect(cache).toBeUndefined();
});

test('saveCache should save cache in localStorage', () => {
    OpenC.cacheKey = 'test';

    OpenC.saveCache('test3');
    const cache = OpenC.getFromCache();

    expect(cache).toEqual('test3');
});

test('getGeoCode call the callback with geocode', async () => {
    const callback = jest.fn();
    OpenC.getGeoCode('Rio de Janeiro', callback);

    await wait(() => expect(callback.mock.calls.length).toBe(1));
    expect(callback.mock.calls[0][0]).toEqual(true);
});

test('getGeoCode should save cache on localStorage', async () => {
    OpenC.getGeoCode('Rio de Janeiro', jest.fn());
    await wait(() => expect(window.localStorage.getItem('opencage_rio-de-janeiro')).toBeTruthy());
});

test('getGeoCode should return cache', () => {
    const callback = jest.fn();
    OpenC.cacheKey = 'opencage_rio-de-janeiro';
    OpenC.saveCache('cache');

    const url = OpenC.getGeoCode('Rio de Janeiro', callback);

    expect(callback.mock.calls[0][0]).toEqual('cache');
});

test('getCityName call the callback with city name', async () => {
    const callback = jest.fn();
    OpenC.getCityName(123, 321, callback);

    await wait(() => expect(callback.mock.calls.length).toBe(1));
    expect(callback.mock.calls[0][0]).toEqual(true);
});

test('getCityName should save cache on localStorage', async () => {
    OpenC.getCityName(123, 321, jest.fn());
    await wait(() => expect(window.localStorage.getItem('opencage_123321')).toBeTruthy());
});

test('getCityName should return cache', () => {
    const callback = jest.fn();
    OpenC.cacheKey = 'opencage_123321';
    OpenC.saveCache('cache');

    const url = OpenC.getCityName(123, 321, callback);

    expect(callback.mock.calls[0][0]).toEqual('cache');
});