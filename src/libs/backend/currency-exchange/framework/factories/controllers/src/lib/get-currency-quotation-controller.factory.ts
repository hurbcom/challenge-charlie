import { GetCurrencyQuotationControllerContract } from "@challenge-charlie/backend/currency-exchange/adapter/contracts/controllers";
import { GetCurrencyQuotationController } from "@challenge-charlie/backend/currency-exchange/adapter/controllers";
import { GetCurrencyQuotationUseCaseFactory } from "@challenge-charlie/backend/currency-exchange/framework/factories/use-cases";

export abstract class GetCurrencyQuotationControllerFactory {
  private static _instance: GetCurrencyQuotationControllerContract;

  public static execute(): GetCurrencyQuotationControllerContract {
    if (!this._instance) {
      this._instance = new GetCurrencyQuotationController(
        GetCurrencyQuotationUseCaseFactory.execute()
      );
    }

    return this._instance;
  }
}
