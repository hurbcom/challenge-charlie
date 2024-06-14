import { fetchForecastData } from './forecast';
import { MonitoringTool } from './monitoring';
import { env } from '@/utils/env';

// Mock the fetch function and the environment variable
global.fetch = jest.fn();
env.OPEN_WEATHER_API_KEY = 'mock-api-key';

class MockMonitoringTool implements MonitoringTool {
  captureAndLogException = jest.fn();
}

const createMockForecastItem = () => ({
  dt: 1718150400,
  main: {
    temp: 23.98,
    feels_like: 24.24,
    temp_min: 22.8,
    temp_max: 23.98,
    pressure: 1019,
    humidity: 69,
    sea_level: 1019,
    grnd_level: 1022,
    temp_kf: 1.18,
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'céu limpo',
      icon: '01n',
    },
  ],
  clouds: { all: 0 },
  wind: { speed: 2.17, deg: 90, gust: 2.65 },
  visibility: 10000,
  pop: 0,
  sys: { pod: 'n' },
  dt_txt: '2024-06-12 00:00:00',
});

describe('fetchForecastData', () => {
  let mockMonitoringTool: MockMonitoringTool;

  beforeEach(() => {
    mockMonitoringTool = new MockMonitoringTool();
    (fetch as jest.Mock).mockClear();
  });

  it('should return forecast data for a valid location', async () => {
    const mockResponse = {
      cod: '200',
      message: 0,
      cnt: 40,
      list: [createMockForecastItem(), createMockForecastItem(), createMockForecastItem()],
      city: {
        id: 3451190,
        name: 'Rio de Janeiro',
        coord: { lat: -22.9028, lon: -43.2075 },
        country: 'BR',
        population: 6023699,
        timezone: -10800,
        sunrise: 1718098215,
        sunset: 1718136904,
      },
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const data = await fetchForecastData('Rio de Janeiro', mockMonitoringTool);

    expect(data).toEqual({
      today: {
        temperatureInCelcius: 23.98,
        temperatureInFahrenheit: 75.164,
        description: 'céu limpo',
        wind: 2.17,
        windDirection: 'E',
        humidity: 69,
        pressure: 1019,
        icon: '01n',
      },
      tomorrow: {
        temperatureInCelcius: 23.98,
        temperatureInFahrenheit: 75.164,
        description: 'céu limpo',
        wind: 2.17,
        windDirection: 'E',
        humidity: 69,
        pressure: 1019,
        icon: '01n',
      },
      dayAfterTomorrow: {
        temperatureInCelcius: 23.98,
        temperatureInFahrenheit: 75.164,
        description: 'céu limpo',
        wind: 2.17,
        windDirection: 'E',
        humidity: 69,
        pressure: 1019,
        icon: '01n',
      },
    });
  });

  it('should return 500 if there is an error fetching forecast data', async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('Fetch error'));

    await expect(fetchForecastData('Rio de Janeiro', mockMonitoringTool)).rejects.toThrow(
      'Could not fetch weather data'
    );

    expect(mockMonitoringTool.captureAndLogException).toHaveBeenCalledWith(new Error('Fetch error'));
  });
});
