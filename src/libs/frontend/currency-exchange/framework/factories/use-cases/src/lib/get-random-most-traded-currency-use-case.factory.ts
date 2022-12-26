import { GetRandomMostTradedCurrencyIsoCodeUseCaseContract } from "@challenge-charlie/frontend/currency-exchange/application/contracts/use-cases";
import { GetRandomMostTradedCurrencyIsoCodeUseCase } from "@challenge-charlie/frontend/currency-exchange/application/use-cases";

export abstract class GetRandomMostTradedCurrencyIsoCodeUseCaseFactory {
    private static _instance: GetRandomMostTradedCurrencyIsoCodeUseCaseContract

    public static execute(): GetRandomMostTradedCurrencyIsoCodeUseCaseContract {
        if (!this._instance) {
            this._instance = new GetRandomMostTradedCurrencyIsoCodeUseCase()
        }

        return this._instance
    }
}