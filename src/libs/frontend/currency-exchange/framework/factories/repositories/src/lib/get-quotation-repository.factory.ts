import { GetQuotationRepositoryContract } from "@challenge-charlie/frontend/currency-exchange/application/contracts/repositories";
import { GetQuotationRepository } from "@challenge-charlie/frontend/currency-exchange/framework/repositories/bff";

export abstract class GetQuotationRepositoryFactory {
    private static _instance: GetQuotationRepositoryContract;

    public static execute(): GetQuotationRepositoryContract {
        if (!this._instance) {
            this._instance = new GetQuotationRepository();
        }

        return this._instance;
    }
}
