import { GetRandomMostTradedCurrencyIsoCodeControllerContract } from '@challenge-charlie/frontend/currency-exchange/adapter/contracts/controllers';
import { GetRandomMostTradedCurrencyIsoCodeController } from '@challenge-charlie/frontend/currency-exchange/adapter/controllers';
import { GetRandomMostTradedCurrencyIsoCodeUseCaseFactory } from '@challenge-charlie/frontend/currency-exchange/framework/factories/use-cases';

export abstract class GetRandomMostTradedCurrencyIsoCodeControllerFactory {
  private static _instance: GetRandomMostTradedCurrencyIsoCodeControllerContract;

  public static execute(): GetRandomMostTradedCurrencyIsoCodeControllerContract {
    if (!this._instance) {
      this._instance = new GetRandomMostTradedCurrencyIsoCodeController(
        GetRandomMostTradedCurrencyIsoCodeUseCaseFactory.execute()
      );
    }

    return this._instance;
  }
}
