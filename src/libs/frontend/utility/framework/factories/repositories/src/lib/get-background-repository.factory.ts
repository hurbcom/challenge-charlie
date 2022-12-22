import { GetBackgroundRepositoryContract } from "@challenge-charlie/frontend/utility/application/contracts/repositories";
import { GetBackgroundRepository } from "@challenge-charlie/frontend/utility/framework/repositories/bff";

export abstract class GetBackgroundRepositoryFactory {
    private static _instance: GetBackgroundRepositoryContract;

    public static execute(): GetBackgroundRepositoryContract {
        if (!this._instance) {
            this._instance = new GetBackgroundRepository();
        }

        return this._instance;
    }
}