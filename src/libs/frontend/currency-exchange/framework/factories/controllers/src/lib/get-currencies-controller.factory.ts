import { GetCurrenciesControllerContract } from '@challenge-charlie/frontend/currency-exchange/adapter/contracts/controllers';
import { GetCurrenciesController } from '@challenge-charlie/frontend/currency-exchange/adapter/controllers';
import { GetCurrenciesRepositoryFactory } from '@challenge-charlie/frontend/currency-exchange/framework/factories/repositories';

export abstract class GetCurrenciesControllerFactory {
  private static _instance: GetCurrenciesControllerContract;

  public static execute(): GetCurrenciesControllerContract {
    if (!this._instance) {
      this._instance = new GetCurrenciesController(
        GetCurrenciesRepositoryFactory.execute()
      );
    }

    return this._instance;
  }
}
