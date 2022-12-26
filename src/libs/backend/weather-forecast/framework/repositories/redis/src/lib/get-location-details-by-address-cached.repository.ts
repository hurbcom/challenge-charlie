import { BaseRedisRepository } from '@challenge-charlie/backend/redis';
import {
  GetLocationDetailsByAdressRepositoryContract,
  GetLocationDetailsByAdressRepositoryInput,
  GetLocationDetailsByAdressRepositoryOutput,
} from '@challenge-charlie/backend/weather-forecast/application/contracts/repositories';

export class GetLocationDetailsByAdressCachedRepository
  extends BaseRedisRepository<
    GetLocationDetailsByAdressRepositoryInput,
    GetLocationDetailsByAdressRepositoryOutput
  >
  implements GetLocationDetailsByAdressRepositoryContract
{
  constructor(
    private readonly getLocationDetailsByAdressRepository: GetLocationDetailsByAdressRepositoryContract
  ) {
    super({
      host: process.env.REDIS_LOCATION_DETAILS_BY_ADDRESS_HOST,
      port: process.env.REDIS_LOCATION_DETAILS_BY_ADDRESS_PORT,
      password: process.env.REDIS_PASSWORD,
    });
  }

  public async specializedExecute(
    input: GetLocationDetailsByAdressRepositoryInput
  ): Promise<GetLocationDetailsByAdressRepositoryOutput> {
    const cached = await this._client.get(input.address);

    if (cached) {
      const { address, currency, latitude, longitude } = JSON.parse(cached);

      return {
        address,
        currency,
        latitude,
        longitude,
      };
    }

    const { address, currency, latitude, longitude } =
      await this.getLocationDetailsByAdressRepository.execute({
        address: input.address,
      });

    await this._client.set(
      input.address,
      JSON.stringify({
        address,
        currency,
        latitude,
        longitude,
      })
    );

    return {
      address,
      currency,
      latitude,
      longitude,
    };
  }
}
