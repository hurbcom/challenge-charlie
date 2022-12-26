import { GetLocationOverviewByAddressControllerContract } from "@challenge-charlie/backend/weather-forecast/adapter/contracts/controllers";
import { GetLocationOverviewByAddressController } from "@challenge-charlie/backend/weather-forecast/adapter/controllers";
import { GetLocationOverviewByAddressUseCaseFactory } from "@challenge-charlie/backend/weather-forecast/framework/factories/use-cases";

export abstract class GetLocationOverviewByAddressControllerFactory {
  private static _instance: GetLocationOverviewByAddressControllerContract;

  public static execute(): GetLocationOverviewByAddressControllerContract {
    if (!this._instance) {
      this._instance = new GetLocationOverviewByAddressController(
        GetLocationOverviewByAddressUseCaseFactory.execute()
      );
    }

    return this._instance;
  }
}
