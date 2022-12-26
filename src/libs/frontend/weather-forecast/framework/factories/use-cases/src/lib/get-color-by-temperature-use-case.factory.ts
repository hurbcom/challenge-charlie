import { GetColorByTemperatureUseCaseContract } from '@challenge-charlie/frontend/weather-forecast/application/contracts/use-cases';
import { GetColorByTemperatureUseCase } from '@challenge-charlie/frontend/weather-forecast/application/use-cases';

export abstract class GetColorByTemperatureUseCaseFactory {
  private static _instance: GetColorByTemperatureUseCaseContract;

  public static execute(): GetColorByTemperatureUseCaseContract {
    if (!this._instance) {
      this._instance = new GetColorByTemperatureUseCase();
    }

    return this._instance;
  }
}
