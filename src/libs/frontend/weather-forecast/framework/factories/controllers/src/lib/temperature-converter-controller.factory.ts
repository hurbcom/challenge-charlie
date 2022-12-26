import { TemperatureConverterControllerContract } from '@challenge-charlie/frontend/weather-forecast/adapter/contracts/controllers';
import { TemperatureConverterController } from '@challenge-charlie/frontend/weather-forecast/adapter/controllers';
import { TemperatureConverterUseCaseFactory } from '@challenge-charlie/frontend/weather-forecast/framework/factories/use-cases';

export abstract class TemperatureConverterControllerFactory {
  private static _instance: TemperatureConverterControllerContract;

  public static execute(): TemperatureConverterControllerContract {
    if (!this._instance) {
      this._instance = new TemperatureConverterController(
        TemperatureConverterUseCaseFactory.execute()
      );
    }

    return this._instance;
  }
}
