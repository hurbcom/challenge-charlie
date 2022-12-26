import { GetCurrencyQuotationUseCaseContract } from "@challenge-charlie/backend/currency-exchange/application/contracts/use-cases";
import { GetCurrencyQuotationUseCase } from "@challenge-charlie/backend/currency-exchange/application/use-cases";
import { GetCurrencyQuotationRepositoryFactory } from "@challenge-charlie/backend/currency-exchange/framework/factories/repositories";

export abstract class GetCurrencyQuotationUseCaseFactory {
  private static _instance: GetCurrencyQuotationUseCaseContract;

  public static execute(): GetCurrencyQuotationUseCaseContract {
    if (!this._instance) {
      this._instance = new GetCurrencyQuotationUseCase(
        GetCurrencyQuotationRepositoryFactory.execute()
      );
    }

    return this._instance;
  }
}
