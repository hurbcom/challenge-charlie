import {
  GetGeolocationCurrentPositionRepositoryContract,
  GetLocationDetailsByCoordinatesRepositoryContract,
} from '@challenge-charlie/frontend/weather-forecast/application/contracts/repositories';
import {
  GetCustomerCurrentLocationUseCaseContract,
  GetCustomerCurrentLocationUseCaseOutput,
} from '@challenge-charlie/frontend/weather-forecast/application/contracts/use-cases';

export class GetCustomerCurrentLocationUseCase
  implements GetCustomerCurrentLocationUseCaseContract
{
  constructor(
    private readonly getGeolocationCurrentPositionRepository: GetGeolocationCurrentPositionRepositoryContract,
    private readonly getLocationDetailsByCoordinatesRepository: GetLocationDetailsByCoordinatesRepositoryContract
  ) {}

  public async execute(): Promise<GetCustomerCurrentLocationUseCaseOutput> {
    const { latitude, longitude } =
      await this.getGeolocationCurrentPositionRepository.execute();

    const { location } = await this.getLocationDetailsByCoordinatesRepository.execute({
      latitude,
      longitude,
    });

    return {
      location
    };
  }
}
