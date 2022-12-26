import { Environment } from "./contracts/environment";

export const environment: Environment = {
    weatherForecast: {
        REDIS_LOCATION_DETAILS_BY_COORDINATES_HOST: 'bff-weather-forecast-cache-1',
        REDIS_LOCATION_DETAILS_BY_COORDINATES_PORT: 6381,
        REDIS_LOCATION_DETAILS_BY_ADDRESS_HOST: 'bff-weather-forecast-cache-2',
        REDIS_LOCATION_DETAILS_BY_ADDRESS_PORT: 6382,
        REDIS_LOCATION_WEATHER_FORECAST_BY_COORDINATES_HOST: 'bff-weather-forecast-cache-3',
        REDIS_LOCATION_WEATHER_FORECAST_BY_COORDINATES_PORT: 6383,
        REDIS_PASSWORD: 123456,
    }
}
