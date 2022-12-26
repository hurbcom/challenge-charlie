import { GetLocationDetailsByAddressRepositoryContract } from '@challenge-charlie/frontend/weather-forecast/application/contracts/repositories';
import {
  GetColorByTemperatureUseCaseContract,
  GetCustomerLocationByAddressUseCaseContract,
  GetCustomerLocationByAddressUseCaseInput,
  GetCustomerLocationByAddressUseCaseOutput,
} from '@challenge-charlie/frontend/weather-forecast/application/contracts/use-cases';

export class GetCustomerLocationByAddressUseCase
  implements GetCustomerLocationByAddressUseCaseContract
{
  constructor(
    private readonly getLocationDetailsByAddressRepository: GetLocationDetailsByAddressRepositoryContract,
    private readonly getColorByTemperatureUseCase: GetColorByTemperatureUseCaseContract
  ) {}

  public async execute(
    input: GetCustomerLocationByAddressUseCaseInput
  ): Promise<GetCustomerLocationByAddressUseCaseOutput> {
    const { location } =
      await this.getLocationDetailsByAddressRepository.execute({
        address: input.address,
      });

    [
      location.weatherForecast.today,
      location.weatherForecast.tomorrow,
      location.weatherForecast.afterTomorrow,
    ].forEach((dayForecast) => {
      const { color } = this.getColorByTemperatureUseCase.execute({
        temperature: location.weatherForecast.today.temp,
      });
      dayForecast.color = color;
    });

    return {
      location,
    };
  }
}
