import { WeatherForecast } from "@challenge-charlie/frontend/weather-forecast/enterprise/entities";

export type GetWeatherForecastByCityRepositoryInput = {
    location: string;
}

export type GetWeatherForecastByCityRepositoryOutput = {
    weatherForecast: WeatherForecast
}

export type GetWeatherForecastByCityRepositoryContract = {
    execute(input: GetWeatherForecastByCityRepositoryInput): Promise<GetWeatherForecastByCityRepositoryOutput>
}
