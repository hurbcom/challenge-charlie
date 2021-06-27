import { WeatherClassifications } from './WeatherClassifications'

export interface GetWeatherByLocationResponse {
  city: string;
  state: string;
  latitude: number;
  longitude: number;
  weatherByDays: Array<{
    classification: WeatherClassifications;
    temperatureInFahrenheit: number;
    windSpeedInMetersBySecond: number;
    windDirectionInAzimuthDegrees: number;
    humidity: number;
    pressure: number
  }>;
}
