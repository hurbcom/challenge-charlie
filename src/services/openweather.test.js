import OpenWeather from './openweather';

import { wait } from '@testing-library/react';

import { rest } from 'msw';
import { setupServer } from 'msw/node'

const server = setupServer(
    rest.get('http://api.openweathermap.org/data/2.5/onecall', (req, res, ctx) => {
        return res(ctx.json({ daily: true }));
    })
);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

const OpenW = new OpenWeather('7ba73e0eb8efe773ed08bfd0627f07b8')

test('createUrl returns url with parameters', () => {
    const url = OpenW.createUrl({lat: 123, lng: 321});
    const expectedUrl = 'http://api.openweathermap.org/data/2.5/onecall?lat=123&lon=321&APPID=7ba73e0eb8efe773ed08bfd0627f07b8&lang=pt_br&units=metric&exclude=hourly%2Cminutely';

    expect(url.href).toEqual(expectedUrl);
});

test('getCacheKey returns cache key', () => {
    const cacheKey = OpenW.getCacheKey({lat: 123, lng: 321});
    const expectedCacheKey = 'openweather_123321';

    expect(cacheKey).toEqual(expectedCacheKey);
});

test('getFromCache returns cache from localStorage', () => {
    OpenW.cacheKey = 'test';
    const now = new Date();
    now.setDate(now.getDate() + 1);

    window.localStorage.setItem('test', JSON.stringify({
        expire: now,
        data: 'test'
    }));

    const cache = OpenW.getFromCache();

    expect(cache).toEqual('test');
});

test('getFromCache should remove expired caches from localStorage', () => {
    OpenW.cacheKey = 'test';
    const now = new Date();
    now.setDate(now.getDate() - 1);

    window.localStorage.setItem('test', JSON.stringify({
        expire: now,
        data: 'test2'
    }));

    const cache = OpenW.getFromCache();

    expect(cache).toBeUndefined();
});

test('saveCache should save cache in localStorage', () => {
    OpenW.cacheKey = 'test';

    OpenW.saveCache('test3');
    const cache = OpenW.getFromCache();

    expect(cache).toEqual('test3');
});

test('getWeatherByGeoCode call the callback with data', async () => {
    const callback = jest.fn();
    const url = OpenW.getWeatherByGeoCode({lat: 123, lng: 321}, callback);

    await wait(() => expect(callback.mock.calls.length).toBe(1));
    expect(callback.mock.calls[0][0]).toEqual(true);
});

test('getWeatherByGeoCode should save cache on localStorage', async () => {
    const url = OpenW.getWeatherByGeoCode({lat: 123, lng: 321}, jest.fn());
    await wait(() => expect(window.localStorage.getItem('openweather_123321')).toBeTruthy());
});