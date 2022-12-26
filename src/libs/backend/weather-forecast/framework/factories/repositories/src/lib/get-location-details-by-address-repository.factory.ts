import { GetLocationDetailsByAdressRepositoryContract } from "@challenge-charlie/backend/weather-forecast/application/contracts/repositories";
import { GetLocationDetailsByAdressRepository } from "@challenge-charlie/backend/weather-forecast/framework/repositories/open-cage-data";
import { GetLocationDetailsByAdressCachedRepository } from "@challenge-charlie/backend/weather-forecast/framework/repositories/redis";

export abstract class GetLocationDetailsByAddressRepositoryFactory {
  private static _instance: GetLocationDetailsByAdressRepositoryContract;

  public static execute(): GetLocationDetailsByAdressRepositoryContract {
    if (!this._instance) {
      this._instance = new GetLocationDetailsByAdressCachedRepository(
        new GetLocationDetailsByAdressRepository()
      );
    }

    return this._instance;
  }
}
