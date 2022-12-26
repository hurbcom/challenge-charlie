import { GetLocationDetailsByCoordinatesRepositoryContract } from '@challenge-charlie/backend/weather-forecast/application/contracts/repositories';
import { GetLocationDetailsByCoordinatesRepository } from '@challenge-charlie/backend/weather-forecast/framework/repositories/open-cage-data';
import { GetLocationDetailsByCoordinatesCachedRepository } from '@challenge-charlie/backend/weather-forecast/framework/repositories/redis';

export abstract class GetLocationDetailsByCoordinatesRepositoryFactory {
  private static _instance: GetLocationDetailsByCoordinatesRepositoryContract;

  public static execute(): GetLocationDetailsByCoordinatesRepositoryContract {
    if (!this._instance) {
      this._instance = new GetLocationDetailsByCoordinatesCachedRepository(
        new GetLocationDetailsByCoordinatesRepository()
      );
    }

    return this._instance;
  }
}
