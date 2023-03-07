import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';

import { defaultTheme } from '@styles/themes/default';
import { GeoLocationContext } from '@contexts/GeoLocationContext';

import LocationSearchInput from '.';
import { WeatherInfoContext } from '@contexts/WeatherInfoContext';
import { WeatherDataInterface } from '@interfaces/WeatherDataInterface';

const mockSetGeoLocation = jest.fn();
const mockSetWeatherInfo = jest.fn();

const geoLocationData = {
  loading: false,
  latitude: -23.5864064,
  longitude: -47.9789056,
  locationName: 'Itapetininga, São Paulo'
};

const weatherInfoData = {
  loading: false
} as WeatherDataInterface;

describe('Components - <LocationSearchInput />', () => {
  it('should render correctly', async () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <GeoLocationContext.Provider value={{ geoLocation: geoLocationData, setGeoLocation: mockSetGeoLocation }}>
          <WeatherInfoContext.Provider value={{ weatherInfo: weatherInfoData, setWeatherInfo: mockSetWeatherInfo }}>
            <LocationSearchInput />
          </WeatherInfoContext.Provider>
        </GeoLocationContext.Provider>
      </ThemeProvider>
    );

    const Input = screen.getByRole('searchbox');

    expect(Input).toHaveValue('Itapetininga, São Paulo');
  });

  it('should render invalid messages when location don`t have three or more characters', async () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <GeoLocationContext.Provider value={{ geoLocation: geoLocationData, setGeoLocation: mockSetGeoLocation }}>
          <WeatherInfoContext.Provider value={{ weatherInfo: weatherInfoData, setWeatherInfo: mockSetWeatherInfo }}>
            <LocationSearchInput />
          </WeatherInfoContext.Provider>
        </GeoLocationContext.Provider>
      </ThemeProvider>
    );

    const Input = screen.getByRole('searchbox');

    await userEvent.click(Input);

    userEvent.clear(Input);
    await userEvent.type(Input, 'Ri');

    expect(Input).toHaveValue('Ri');
    expect(screen.getByText(/Informe no mínimo 3 letras na pesquisa!/i));
  });
});
