import ForecastCard from '../Components/ForecastCard'
import { render, fireEvent, screen, act } from '@testing-library/react';
import App from '../App';
import { BING_IMAGE } from '../Utils/urls';
import { apiFetch } from '../Utils';

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
    const mockSuccessResponse = 'url';
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    await act(async () => {
      render(<App />)
    })
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(BING_IMAGE, FETCH_INIT);
  })
})

