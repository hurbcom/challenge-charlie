import { GetCurrenciesRepositoryContract } from "@challenge-charlie/backend/currency-exchange/application/contracts/repositories";
import { GetCurrenciesRepository } from "@challenge-charlie/backend/currency-exchange/framework/repositories/coinbase";
import { GetCurrenciesCachedRepository } from "@challenge-charlie/backend/currency-exchange/framework/repositories/redis";

export abstract class GetCurrenciesRepositoryFactory {
  private static _instance: GetCurrenciesRepositoryContract;

  public static execute(): GetCurrenciesRepositoryContract {
    if (!this._instance) {
      this._instance = new GetCurrenciesCachedRepository(
        new GetCurrenciesRepository()
      );
    }

    return this._instance;
  }
}
