import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';

import { defaultTheme } from '@styles/themes/default';
import { WeatherInfoContext } from '@contexts/WeatherInfoContext';

import WeatherForecastInfo from '.';

const mockSetWeatherInfo = jest.fn();

const weatherInfoData = {
  loading: false,
  current: {
    dt: 1678132496,
    temp: 24.69,
    pressure: 1008,
    humidity: 76,
    wind_speed: 3.4,
    wind_deg: 329,
    weather: [
      {
        description: 'nuvens dispersas',
        icon: '03d',
        main: 'Clouds'
      }
    ]
  },
  daily: {
    tomorrowTempWeather: {
      dt: 1678201200,
      temp: {
        day: 26.71
      }
    },
    afterTomorrowTempWeather: {
      dt: 1678287600,
      temp: {
        day: 27.52
      }
    }
  }
};

describe('Components - <WeatherForecastInfo />', () => {
  it('should render correctly', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <WeatherInfoContext.Provider value={{ weatherInfo: weatherInfoData, setWeatherInfo: mockSetWeatherInfo }}>
          <WeatherForecastInfo />
        </WeatherInfoContext.Provider>
      </ThemeProvider>
    );

    const weatherDescription = screen.getByRole('heading', {
      name: /nuvens dispersas/i
    });

    expect(weatherDescription).toBeInTheDocument();
    expect(screen.getByText(/25°C/i)).toBeInTheDocument();
    expect(screen.getByText(/27°C/i)).toBeInTheDocument();
    expect(screen.getByText(/28°C/i)).toBeInTheDocument();
    expect(screen.getByText(/humidadade: 76%/i)).toBeInTheDocument();
    expect(screen.getByText(/humidadade: 76%/i)).toBeInTheDocument();
    expect(screen.getByText(/pressão: 1008hpa/i)).toBeInTheDocument();
    expect(screen.getByText(/vento: no 12\.2km\/h/i)).toBeInTheDocument();
    expect(screen.getByLabelText('imagem do status do tempo atual')).toBeInTheDocument();
  });

  it('should render Fahrenheit temperature when user click on temperature', async () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <WeatherInfoContext.Provider value={{ weatherInfo: weatherInfoData, setWeatherInfo: mockSetWeatherInfo }}>
          <WeatherForecastInfo />
        </WeatherInfoContext.Provider>
      </ThemeProvider>
    );

    const convertTemperatureButton = screen.getByLabelText('botão para mudar temperatura');

    await userEvent.click(convertTemperatureButton);

    expect(screen.getByText(/76°F/i)).toBeInTheDocument();
    expect(screen.getByText(/80°F/i)).toBeInTheDocument();
    expect(screen.getByText(/82°F/i)).toBeInTheDocument();
  });
});
