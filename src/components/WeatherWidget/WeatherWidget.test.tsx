import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import WeatherWidget from '@/components/WeatherWidget';
import useForecast from '@/hooks/useForecast';

jest.mock('@/hooks/useForecast', () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockedUseForecast = useForecast as jest.MockedFunction<typeof useForecast>;

describe('WeatherWidget', () => {
  const initialCity = 'New York';
  const initialData = {
    today: {
      temperatureInCelcius: 20,
      temperatureInFahrenheit: 68,
      description: 'Clear sky',
      wind: 5,
      pressure: 1012,
      humidity: 60,
      icon: '01d',
    },
    tomorrow: {
      temperatureInCelcius: 22,
      temperatureInFahrenheit: 71.6,
      description: 'Partly cloudy',
      wind: 6,
      pressure: 1013,
      humidity: 55,
      icon: '02d',
    },
    dayAfterTomorrow: {
      temperatureInCelcius: 19,
      temperatureInFahrenheit: 66.2,
      description: 'Rainy',
      wind: 7,
      pressure: 1010,
      humidity: 70,
      icon: '09d',
    },
  };

  beforeEach(() => {
    mockedUseForecast.mockReturnValue({
      fetchForecast: jest.fn().mockResolvedValue(initialData),
      loading: false,
      error: null,
      data: null,
    });
  });

  it('renders the WeatherWidget with initial data', () => {
    render(<WeatherWidget city={initialCity} data={initialData} />);

    expect(screen.getByPlaceholderText('Digite uma cidade')).toHaveValue(initialCity);
    expect(screen.getByText('Hoje')).toBeInTheDocument();
    expect(screen.getByText('Amanhã')).toBeInTheDocument();
    expect(screen.getByText('Depois de amanhã')).toBeInTheDocument();
  });

  it('updates the city input value', () => {
    render(<WeatherWidget city={initialCity} data={initialData} />);

    const input = screen.getByPlaceholderText('Digite uma cidade');
    act(() => {
      fireEvent.change(input, { target: { value: 'San Francisco' } });
    });

    expect(input).toHaveValue('San Francisco');
  });

  it('fetches and updates the forecast data on form submission', async () => {
    const { fetchForecast } = useForecast();

    render(<WeatherWidget city={initialCity} data={initialData} />);

    const input = screen.getByPlaceholderText('Digite uma cidade');
    const form = screen.getByRole('form');

    act(() => {
      fireEvent.change(input, { target: { value: 'San Francisco' } });
      fireEvent.submit(form);
    });

    await waitFor(() => expect(fetchForecast).toHaveBeenCalledWith('San Francisco'));
    await waitFor(() => expect(screen.getByText('Clear sky')).toBeInTheDocument());
  });

  it('shows loading indicator when fetching forecast', () => {
    mockedUseForecast.mockReturnValue({
      fetchForecast: jest.fn().mockResolvedValue(initialData),
      loading: true,
      error: null,
      data: null,
    });

    render(<WeatherWidget city={initialCity} data={initialData} />);

    const input = screen.getByPlaceholderText('Digite uma cidade');
    const form = screen.getByRole('form');
    const button = screen.getByTestId('geo-button');

    act(() => {
      fireEvent.change(input, { target: { value: 'San Francisco' } });
      fireEvent.submit(form);
    });

    expect(button).toBeDisabled();
  });
});
