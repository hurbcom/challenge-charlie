import { GetLocationOverviewByAddressUseCaseContract } from '@challenge-charlie/backend/weather-forecast/application/contracts/use-cases';
import { GetLocationOverviewByAddressUseCase } from '@challenge-charlie/backend/weather-forecast/application/use-cases';
import {
  GetLocationDetailsByAddressRepositoryFactory,
  GetLocationWeatherForecastByCoordinatesRepositoryFactory,
} from '@challenge-charlie/backend/weather-forecast/framework/factories/repositories';

export abstract class GetLocationOverviewByAddressUseCaseFactory {
  private static _instance: GetLocationOverviewByAddressUseCaseContract;

  public static execute(): GetLocationOverviewByAddressUseCaseContract {
    if (!this._instance) {
      this._instance = new GetLocationOverviewByAddressUseCase(
        GetLocationDetailsByAddressRepositoryFactory.execute(),
        GetLocationWeatherForecastByCoordinatesRepositoryFactory.execute()
      );
    }

    return this._instance;
  }
}
