
import { BaseRedisRepository } from '@challenge-charlie/backend/redis';
import { GetLocationDetailsByCoordinatesRepositoryContract, GetLocationDetailsByCoordinatesRepositoryInput, GetLocationDetailsByCoordinatesRepositoryOutput } from '@challenge-charlie/backend/weather-forecast/application/contracts/repositories';

export class GetLocationDetailsByCoordinatesCachedRepository
  extends BaseRedisRepository<
    GetLocationDetailsByCoordinatesRepositoryInput, GetLocationDetailsByCoordinatesRepositoryOutput
  >
  implements GetLocationDetailsByCoordinatesRepositoryContract {
  constructor(
    private readonly getLocationDetailsByCoordinatesRepository: GetLocationDetailsByCoordinatesRepositoryContract
  ) {
    super({
      host: process.env.REDIS_LOCATION_DETAILS_BY_COORDINATES_HOST,
      port: process.env.REDIS_LOCATION_DETAILS_BY_COORDINATES_PORT,
      password: process.env.REDIS_PASSWORD,
    });
  }

  public async specializedExecute(
    { latitude, longitude }: GetLocationDetailsByCoordinatesRepositoryInput
  ): Promise<GetLocationDetailsByCoordinatesRepositoryOutput> {
    const key = `${latitude}:${longitude}`;

    const cached = await this._client.get(key);

    if (cached) {
      const { address, currency } = JSON.parse(cached);

      return {
        address,
        currency,
      };
    }

    const { address, currency } = await this.getLocationDetailsByCoordinatesRepository.execute({
      latitude,
      longitude
    });

    await this._client.set(key, JSON.stringify({
      address,
      currency
    }));

    return {
      address,
      currency,
    };
  }
}
