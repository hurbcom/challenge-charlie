import {
  GetLocationDetailsByCoordinatesRepositoryContract,
  GetLocationWeatherForecastByCoordinatesRepositoryContract,
} from '@challenge-charlie/backend/weather-forecast/application/contracts/repositories';
import {
  GetLocationOverviewByCoordinatesUseCaseContract,
  GetLocationOverviewByCoordinatesUseCaseInput,
  GetLocationOverviewByCoordinatesUseCaseOutput,
} from '@challenge-charlie/backend/weather-forecast/application/contracts/use-cases';

export class GetLocationOverviewByCoordinatesUseCase
  implements GetLocationOverviewByCoordinatesUseCaseContract
{
  constructor(
    private readonly getLocationDetailsByCoordinatesRepository: GetLocationDetailsByCoordinatesRepositoryContract,
    private readonly getLocationWeatherForecastByCoordinatesRepository: GetLocationWeatherForecastByCoordinatesRepositoryContract
  ) {}

  public async execute({
    latitude,
    longitude,
  }: GetLocationOverviewByCoordinatesUseCaseInput): Promise<GetLocationOverviewByCoordinatesUseCaseOutput> {
    const getLocationDetailsByCoordinatesTask =
      this.getLocationDetailsByCoordinatesRepository.execute({
        latitude,
        longitude,
      });

    const getLocationWeatherForecastByCoordinatesTask =
      this.getLocationWeatherForecastByCoordinatesRepository.execute({
        latitude,
        longitude,
      });

    const [
      getLocationDetailsByCoordinatesOutput,
      getLocationWeatherForecastByCoordinatesOutput,
    ] = await Promise.all([
      getLocationDetailsByCoordinatesTask,
      getLocationWeatherForecastByCoordinatesTask,
    ]);

    const { address, currency } = getLocationDetailsByCoordinatesOutput;
    const { forecast: weatherForecast } =
      getLocationWeatherForecastByCoordinatesOutput;

    return {
      location: {
        address,
        currency,
        weatherForecast,
      },
    };
  }
}
