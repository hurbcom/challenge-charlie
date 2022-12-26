import {
  GetLocationDetailsByAdressRepositoryContract,
  GetLocationWeatherForecastByCoordinatesRepositoryContract,
} from '@challenge-charlie/backend/weather-forecast/application/contracts/repositories';
import {
  GetLocationOverviewByAddressUseCaseContract,
  GetLocationOverviewByAddressUseCaseInput,
  GetLocationOverviewByAddressUseCaseOutput,
} from '@challenge-charlie/backend/weather-forecast/application/contracts/use-cases';

export class GetLocationOverviewByAddressUseCase
  implements GetLocationOverviewByAddressUseCaseContract
{
  constructor(
    private readonly getLocationDetailsByAddressRepository: GetLocationDetailsByAdressRepositoryContract,
    private readonly getLocationWeatherForecastByCoordinatesRepository: GetLocationWeatherForecastByCoordinatesRepositoryContract
  ) {}

  public async execute(
    input: GetLocationOverviewByAddressUseCaseInput
  ): Promise<GetLocationOverviewByAddressUseCaseOutput> {
    const { address, currency, latitude, longitude } =
      await this.getLocationDetailsByAddressRepository.execute({
        address: input.address,
      });

    const { forecast: weatherForecast } =
      await this.getLocationWeatherForecastByCoordinatesRepository.execute({
        latitude,
        longitude,
      });

    return {
      location: {
        address,
        currency,
        weatherForecast,
      },
    };
  }
}
