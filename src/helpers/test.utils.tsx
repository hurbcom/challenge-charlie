import React from "react";
import { render } from "@testing-library/react";
import { WeatherContext } from "../contexts/WeatherContext";

const weatherInformations = {
  city: 'Rio de Janeiro',
  today: {
    temp: 12,
    description: 'Ensolarado',
    humidity: 53,
    wind: 345,
    pressure: 1005,
    icon: '345'
  },
  tomorrow: {
    tempMax: 35,
    tempMin: 13,
    icon: '213'
  },
  afterTomorrow: {
    tempMax: 31,
    tempMin: 12,
    icon: '234'
  }
}

export const weatherContextProps = {
  backgroundImage: 'imagem',
  setBackgroundImage: jest.fn(),
  location: {
    lat: 32,
    lon: 33
  },
  setLocation: jest.fn(),
  weatherInformations: weatherInformations,
  setWeatherInformations: jest.fn(),
  loading: false,
  setLoading: jest.fn(),
  isFahrenheit: false,
  setIsFahrenheit: jest.fn()

}

export const contextProvider = (children: any) =>
  render(<WeatherContext.Provider value={weatherContextProps}>{children}</WeatherContext.Provider>);
