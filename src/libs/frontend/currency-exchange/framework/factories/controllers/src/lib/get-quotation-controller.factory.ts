import { GetQuotationControllerContract } from "@challenge-charlie/frontend/currency-exchange/adapter/contracts/controllers";
import { GetQuotationController } from "@challenge-charlie/frontend/currency-exchange/adapter/controllers";
import { GetQuotationRepositoryFactory } from '@challenge-charlie/frontend/currency-exchange/framework/factories/repositories';

export abstract class GetQuotationControllerFactory {
    private static _instance: GetQuotationControllerContract;

    public static execute(): GetQuotationControllerContract {
        if (!this._instance) {
            this._instance = new GetQuotationController(
                GetQuotationRepositoryFactory.execute()
            );
        }

        return this._instance;
    }
}
