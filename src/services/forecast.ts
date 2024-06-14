import { getWindDirectionLabel } from './../utils/wind';
import { celsiusToFahrenheit } from '@/utils/forecast';
import { MonitoringTool } from './monitoring';
import { env } from '@/utils/env';

export interface Forecast {
  temperatureInCelcius: number;
  temperatureInFahrenheit: number;
  description: string;
  wind: number;
  windDirection: string;
  humidity: number;
  pressure: number;
  icon: string;
}

export interface Response {
  today: Forecast;
  tomorrow: Forecast;
  dayAfterTomorrow: Forecast;
}

const parseForecastData = (forecast: any): Forecast => {
  return {
    temperatureInCelcius: forecast.main.temp,
    temperatureInFahrenheit: celsiusToFahrenheit(forecast.main.temp),
    description: forecast.weather[0].description,
    wind: forecast.wind.speed,
    windDirection: getWindDirectionLabel(forecast.wind.deg),
    humidity: forecast.main.humidity,
    pressure: forecast.main.pressure,
    icon: forecast.weather[0].icon,
  };
};

export const fetchForecastData = async (location: string, monitoring?: MonitoringTool): Promise<Response> => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(location)}&appid=${env.OPEN_WEATHER_API_KEY}&units=metric&lang=pt_br`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();
    const res: Response = {
      today: parseForecastData(data.list[0]),
      tomorrow: parseForecastData(data.list[1]),
      dayAfterTomorrow: parseForecastData(data.list[2]),
    };

    return res;
  } catch (error) {
    if (error instanceof Error) {
      monitoring?.captureAndLogException(error);
    } else {
      monitoring?.captureAndLogException(new Error('Unknown error occurred'));
    }
    throw new Error('Could not fetch weather data');
  }
};
