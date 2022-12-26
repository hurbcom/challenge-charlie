import { GetLocationOverviewByCoordinatesControllerContract } from "@challenge-charlie/backend/weather-forecast/adapter/contracts/controllers";
import { GetLocationOverviewByCoordinatesController } from "@challenge-charlie/backend/weather-forecast/adapter/controllers";
import { GetLocationOverviewByCoordinatesUseCaseFactory } from "@challenge-charlie/backend/weather-forecast/framework/factories/use-cases";

export abstract class GetLocationOverviewByCoordinatesControllerFactory {
  private static _instance: GetLocationOverviewByCoordinatesControllerContract;

  public static execute(): GetLocationOverviewByCoordinatesControllerContract {
    if (!this._instance) {
      this._instance = new GetLocationOverviewByCoordinatesController(
        GetLocationOverviewByCoordinatesUseCaseFactory.execute()
      );
    }

    return this._instance;
  }
}
