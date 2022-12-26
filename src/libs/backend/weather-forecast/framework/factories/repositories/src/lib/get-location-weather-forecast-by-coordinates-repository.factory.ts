import { GetLocationWeatherForecastByCoordinatesRepositoryContract } from "@challenge-charlie/backend/weather-forecast/application/contracts/repositories";
import { GetLocationWeatherForecastByCoordinatesRepository } from "@challenge-charlie/backend/weather-forecast/framework/repositories/open-weather-map";
import { GetLocationWeatherForecastByCoordinatesCachedRepository } from "@challenge-charlie/backend/weather-forecast/framework/repositories/redis";

export abstract class GetLocationWeatherForecastByCoordinatesRepositoryFactory {
  private static _instance: GetLocationWeatherForecastByCoordinatesRepositoryContract;

  public static execute(): GetLocationWeatherForecastByCoordinatesRepositoryContract {
    if (!this._instance) {
      this._instance =
        new GetLocationWeatherForecastByCoordinatesCachedRepository(
          new GetLocationWeatherForecastByCoordinatesRepository()
        );
    }

    return this._instance;
  }
}
