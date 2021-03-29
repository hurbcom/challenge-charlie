import { render, act } from '@testing-library/react';
import App from '../App';
import { BING_IMAGE } from '../Utils/urls';
import { mockFetchPromise } from './utils';

const FETCH_INIT = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
}

beforeAll(() => jest.spyOn(window, 'fetch'))

describe("App", () => {
  it("fetches image background url", async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise('url'));
    await act(async () => {
      render(<App />)
    })
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(BING_IMAGE, FETCH_INIT);
  })
})

