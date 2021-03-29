import { render, act } from '@testing-library/react';
import App from '../App';
import { BING_IMAGE } from '../Utils/urls';
import { FETCH_INIT, mockFetchPromise } from './utils';

beforeAll(() => jest.spyOn(window, 'fetch'))

test("fetches image background url", async () => {
  jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise('url'));
  await act(async () => {
    render(<App />)
  })
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(BING_IMAGE, FETCH_INIT);
})


