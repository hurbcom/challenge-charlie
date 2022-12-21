import { GetCustomerLocationByAddressControllerContract } from '@challenge-charlie/frontend/weather-forecast/adapter/contracts/controllers';
import { GetCustomerLocationByAddressController } from '@challenge-charlie/frontend/weather-forecast/adapter/controllers';
import { GetCustomerLocationByAddressUseCaseFactory } from '@challenge-charlie/frontend/weather-forecast/framework/factories/use-cases';

export abstract class GetCustomerLocationByAddressControllerFactory {
  private static _instance: GetCustomerLocationByAddressControllerContract;

  public static execute(): GetCustomerLocationByAddressControllerContract {
    if (!this._instance) {
      this._instance = new GetCustomerLocationByAddressController(
        GetCustomerLocationByAddressUseCaseFactory.execute()
      );
    }

    return this._instance;
  }
}
