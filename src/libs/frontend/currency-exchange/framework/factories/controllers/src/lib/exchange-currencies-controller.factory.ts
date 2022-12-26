import { ExchangeCurrenciesControllerContract } from "@challenge-charlie/frontend/currency-exchange/adapter/contracts/controllers";
import { ExchangeCurrenciesController } from "@challenge-charlie/frontend/currency-exchange/adapter/controllers";
import { ExchangeCurrenciesUseCaseFactory } from "@challenge-charlie/frontend/currency-exchange/framework/factories/use-cases";


export abstract class ExchangeCurrenciesControllerFactory {
    private static _instance: ExchangeCurrenciesControllerContract;

    public static execute(): ExchangeCurrenciesControllerContract {
        if (!this._instance) {
            this._instance = new ExchangeCurrenciesController(
                ExchangeCurrenciesUseCaseFactory.execute()
            );
        }

        return this._instance;
    }
}