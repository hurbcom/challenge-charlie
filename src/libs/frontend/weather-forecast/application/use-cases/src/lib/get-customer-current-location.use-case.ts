import {
  GetGeolocationCurrentPositionRepositoryContract,
  GetLocationDetailsByCoordinatesRepositoryContract,
} from '@challenge-charlie/frontend/weather-forecast/application/contracts/repositories';
import {
  GetColorByTemperatureUseCaseContract,
  GetCustomerCurrentLocationUseCaseContract,
  GetCustomerCurrentLocationUseCaseOutput,
} from '@challenge-charlie/frontend/weather-forecast/application/contracts/use-cases';

export class GetCustomerCurrentLocationUseCase
  implements GetCustomerCurrentLocationUseCaseContract
{
  constructor(
    private readonly getGeolocationCurrentPositionRepository: GetGeolocationCurrentPositionRepositoryContract,
    private readonly getLocationDetailsByCoordinatesRepository: GetLocationDetailsByCoordinatesRepositoryContract,
    private readonly getColorByTemperatureUseCase: GetColorByTemperatureUseCaseContract
  ) {}

  public async execute(): Promise<GetCustomerCurrentLocationUseCaseOutput> {
    const { latitude, longitude } =
      await this.getGeolocationCurrentPositionRepository.execute();

    const { location } =
      await this.getLocationDetailsByCoordinatesRepository.execute({
        latitude,
        longitude,
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
