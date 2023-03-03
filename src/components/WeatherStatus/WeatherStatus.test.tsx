import React from 'react';
import { addDays, subDays } from 'date-fns';
import { fireEvent, screen } from '@testing-library/react';

import { theme } from '~/styles/theme';
import { Weather } from '~/@types/openWeather';
import { TemperatureTypeEnum } from '~/pages/home';
import renderWithProviders from '~/utils/renderWithProviders';

import { WeatherStatus, WeatherStatusProps } from '.';

const mockedToday = new Date(2023, 1, 19).toJSON();

jest.mock('@react-hook/window-size', () => ({
  useWindowWidth: ({ initialWidth }: { initialWidth?: number }) => 1200,
}));

const mockedWeather: Weather = {
  date: mockedToday,
  humidity: 55,
  pressure: 1016,
  icon: '10d',
  wind: {
    speed: 3.6,
    degrees: 360,
  },
  temperature: 32.0,
  description: 'Ensolarado',
};

const defaultValues: WeatherStatusProps = {
  isLoading: false,
  weather: mockedWeather,
  setTemperatureType: jest.fn,
  temperatureType: TemperatureTypeEnum.celsius,
};

describe('components - <WeatherStatus />', () => {
  beforeEach(() => {
    jest.setSystemTime(new Date(2023, 1, 19));
  });

  describe('simple mode - day text and temperature tests', () => {
    it('should render with temperature and correct day', () => {
      renderWithProviders(<WeatherStatus {...defaultValues} />);

      expect(screen.getByText(/Hoje/i)).toBeInTheDocument();
      expect(screen.getByText('32ºC')).toBeInTheDocument();
    });

    it('should show text date correctly when is tomorrow and send different weather infos', () => {
      const tomorrow = addDays(new Date(), 1).toJSON();

      renderWithProviders(
        <WeatherStatus {...defaultValues} weather={{ ...mockedWeather, temperature: 20.0, date: tomorrow }} />,
      );

      expect(screen.getByText(/Amanhã/i)).toBeInTheDocument();
      expect(screen.getByText('20ºC')).toBeInTheDocument();
    });

    it('should show text date correctly when the date is after tomorrow', () => {
      const afterTomorrow = addDays(new Date(), 2).toJSON();

      renderWithProviders(<WeatherStatus {...defaultValues} weather={{ ...mockedWeather, date: afterTomorrow }} />);

      expect(screen.getByText(/Depois de amanhã/i)).toBeInTheDocument();
    });

    it('should return nothing when is not on range of three days', () => {
      const afterAfterTomorrow = addDays(new Date(), 3).toJSON();

      renderWithProviders(
        <WeatherStatus {...defaultValues} weather={{ ...mockedWeather, date: afterAfterTomorrow }} />,
      );

      expect(screen.getByTitle(/Carregando conteúdo\.\.\./i)).toBeInTheDocument();
    });

    it('should return nothing when the date is on the past', () => {
      const tomorrow = subDays(new Date(), 1).toJSON();

      renderWithProviders(<WeatherStatus {...defaultValues} weather={{ ...mockedWeather, date: tomorrow }} />);

      expect(screen.getByTitle(/Carregando conteúdo\.\.\./i)).toBeInTheDocument();
    });

    it('should render be able to change between Celsius and Fahrenheit whens clicks on temperature', () => {
      const mockSetTemperatureType = jest.fn();

      renderWithProviders(<WeatherStatus {...defaultValues} setTemperatureType={mockSetTemperatureType} />);

      const celciusTemperature = screen.getByText('32ºC');

      expect(celciusTemperature).toBeInTheDocument();
      expect(screen.queryByText('90ºF')).not.toBeInTheDocument();

      fireEvent.click(celciusTemperature.parentElement as HTMLElement);

      expect(mockSetTemperatureType).toHaveBeenCalled();
    });
  });

  describe('background color', () => {
    it("should render gray when doesn't have weather info", () => {
      const { container } = renderWithProviders(<WeatherStatus {...defaultValues} weather={undefined} />);

      const componentContainer = container.firstChild;

      expect(componentContainer).toHaveStyleRule('background', theme.colors.gray200, {
        modifier: '::before',
      });
    });

    it('should render blue when is less than 15ºC or 59ºF', () => {
      const { container } = renderWithProviders(
        <WeatherStatus {...defaultValues} weather={{ ...mockedWeather, temperature: 14 }} />,
      );

      const componentContainer = container.firstChild;

      expect(componentContainer).toHaveStyleRule('background', theme.colors.blue, {
        modifier: '::before',
      });
    });

    it('should render red when is more than 35ºC or 95ºF', () => {
      const { container } = renderWithProviders(
        <WeatherStatus {...defaultValues} weather={{ ...mockedWeather, temperature: 36 }} />,
      );

      const componentContainer = container.firstChild;

      expect(componentContainer).toHaveStyleRule('background', theme.colors.red, {
        modifier: '::before',
      });
    });

    it('should render yellow when is equal or between (15ºC or 59ºF) and (35ºC or 95ºF)', () => {
      const { container } = renderWithProviders(<WeatherStatus {...defaultValues} weather={mockedWeather} />);

      const componentContainer = container.firstChild;

      expect(componentContainer).toHaveStyleRule('background', theme.colors.yellow, {
        modifier: '::before',
      });
    });
  });

  it('should render with detailed infos', () => {
    renderWithProviders(<WeatherStatus {...defaultValues} isDetailed />);

    expect(screen.getByText(/Ensolarado/i)).toBeInTheDocument();
    expect(screen.getByText(/3\.6km\/h/i)).toBeInTheDocument();
    expect(screen.getByText(/55%/i)).toBeInTheDocument();
    expect(screen.getByText(/1016hPA/i)).toBeInTheDocument();
  });
});
