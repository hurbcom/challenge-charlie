import { GetLocationOverviewByCoordinatesUseCaseContract } from '@challenge-charlie/backend/weather-forecast/application/contracts/use-cases';
import { GetLocationOverviewByCoordinatesUseCase } from '@challenge-charlie/backend/weather-forecast/application/use-cases';
import {
  GetLocationDetailsByCoordinatesRepositoryFactory,
  GetLocationWeatherForecastByCoordinatesRepositoryFactory,
} from '@challenge-charlie/backend/weather-forecast/framework/factories/repositories';

export abstract class GetLocationOverviewByCoordinatesUseCaseFactory {
  private static _instance: GetLocationOverviewByCoordinatesUseCaseContract;

  public static execute(): GetLocationOverviewByCoordinatesUseCaseContract {
    if (!this._instance) {
      this._instance = new GetLocationOverviewByCoordinatesUseCase(
        GetLocationDetailsByCoordinatesRepositoryFactory.execute(),
        GetLocationWeatherForecastByCoordinatesRepositoryFactory.execute()
      );
    }

    return this._instance;
  }
}
