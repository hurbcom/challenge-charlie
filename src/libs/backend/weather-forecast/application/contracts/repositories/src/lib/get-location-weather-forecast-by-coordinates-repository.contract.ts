import { WeatherForecast } from "@challenge-charlie/backend/weather-forecast/enterprise/entities";

export type GetLocationWeatherForecastByCoordinatesRepositoryInput = {
  latitude: string;
  longitude: string;
};
export type GetLocationWeatherForecastByCoordinatesRepositoryOutput = {
  forecast: WeatherForecast;
};
export type GetLocationWeatherForecastByCoordinatesRepositoryContract = {
  execute(
    input: GetLocationWeatherForecastByCoordinatesRepositoryInput
  ): Promise<GetLocationWeatherForecastByCoordinatesRepositoryOutput>;
};
