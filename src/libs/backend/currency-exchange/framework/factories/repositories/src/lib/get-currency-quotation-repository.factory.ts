import { GetCurrencyQuotationRepositoryContract } from "@challenge-charlie/backend/currency-exchange/application/contracts/repositories";
import { GetCurrencyQuotationRepository } from "@challenge-charlie/backend/currency-exchange/framework/repositories/coinbase";
import { GetCurrencyQuotationCachedRepository } from "@challenge-charlie/backend/currency-exchange/framework/repositories/redis";

export abstract class GetCurrencyQuotationRepositoryFactory {
  private static _instance: GetCurrencyQuotationRepositoryContract;

  public static execute(): GetCurrencyQuotationRepositoryContract {
    if (!this._instance) {
      this._instance = new GetCurrencyQuotationCachedRepository(new GetCurrencyQuotationRepository());
    }

    return this._instance;
  }
}
