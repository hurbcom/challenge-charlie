import { GetCustomerCurrentLocationControllerContract } from '@challenge-charlie/frontend/weather-forecast/adapter/contracts/controllers';
import { GetCustomerCurrentLocationController } from '@challenge-charlie/frontend/weather-forecast/adapter/controllers';
import { GetCustomerCurrentLocationUseCaseFactory } from '@challenge-charlie/frontend/weather-forecast/framework/factories/use-cases';

export abstract class GetCustomerCurrentLocationControllerFactory {
  private static _instance: GetCustomerCurrentLocationControllerContract;

  public static execute(): GetCustomerCurrentLocationControllerContract {
    if (!this._instance) {
      this._instance = new GetCustomerCurrentLocationController(
        GetCustomerCurrentLocationUseCaseFactory.execute()
      );
    }

    return this._instance;
  }
}

