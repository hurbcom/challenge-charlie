import { GetCurrenciesRepositoryContract } from "@challenge-charlie/frontend/currency-exchange/application/contracts/repositories";
import { GetCurrenciesRepository } from "@challenge-charlie/frontend/currency-exchange/framework/repositories/bff";

export abstract class GetCurrenciesRepositoryFactory {
    private static _instance: GetCurrenciesRepositoryContract;

    public static execute(): GetCurrenciesRepositoryContract {
        if (!this._instance) {
            this._instance = new GetCurrenciesRepository();
        }

        return this._instance;
    }
}
