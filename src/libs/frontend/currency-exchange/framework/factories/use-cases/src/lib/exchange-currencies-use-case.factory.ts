import { ExchangeCurrenciesUseCaseContract } from "@challenge-charlie/frontend/currency-exchange/application/contracts/use-cases";
import { ExchangeCurrenciesUseCase } from "@challenge-charlie/frontend/currency-exchange/application/use-cases";


export abstract class ExchangeCurrenciesUseCaseFactory {
    private static _instance: ExchangeCurrenciesUseCaseContract;

    public static execute(): ExchangeCurrenciesUseCaseContract {
        if (!this._instance) {
            this._instance = new ExchangeCurrenciesUseCase();
        }

        return this._instance;
    }
}