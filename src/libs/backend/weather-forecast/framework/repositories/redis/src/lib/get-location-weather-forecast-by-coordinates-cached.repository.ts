
import { BaseRedisRepository } from '@challenge-charlie/backend/redis';
import { GetLocationWeatherForecastByCoordinatesRepositoryContract, GetLocationWeatherForecastByCoordinatesRepositoryInput, GetLocationWeatherForecastByCoordinatesRepositoryOutput } from '@challenge-charlie/backend/weather-forecast/application/contracts/repositories';

export class GetLocationWeatherForecastByCoordinatesCachedRepository
  extends BaseRedisRepository<GetLocationWeatherForecastByCoordinatesRepositoryInput, GetLocationWeatherForecastByCoordinatesRepositoryOutput>
  implements GetLocationWeatherForecastByCoordinatesRepositoryContract {
  constructor(
    private readonly getLocationWeatherForecastByCoordinatesRepository: GetLocationWeatherForecastByCoordinatesRepositoryContract
  ) {
    super({
      host: process.env.REDIS_LOCATION_WEATHER_FORECAST_BY_COORDINATES_HOST,
      port: process.env.REDIS_LOCATION_WEATHER_FORECAST_BY_COORDINATES_PORT,
      password: process.env.REDIS_PASSWORD,
    });
  }

  public async specializedExecute({
    latitude, longitude,
  }: GetLocationWeatherForecastByCoordinatesRepositoryInput): Promise<GetLocationWeatherForecastByCoordinatesRepositoryOutput> {
    const key = `${latitude}:${longitude}`;

    const cached = await this._client.get(key);

    if (cached) {
      return {
        forecast: JSON.parse(cached),
      };
    }

    const { forecast } = await this.getLocationWeatherForecastByCoordinatesRepository.execute({
      latitude,
      longitude,
    });

    await this._client.set(key, JSON.stringify({ ...forecast }));

    return {
      forecast,
    };
  }
}
