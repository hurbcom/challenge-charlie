import { GetBackgroundControllerContract } from "@challenge-charlie/frontend/utility/adapter/contracts/controllers";
import { GetBackgroundController } from "@challenge-charlie/frontend/utility/adapter/controllers";
import { GetBackgroundRepositoryFactory } from "@challenge-charlie/frontend/utility/framework/factories/repositories";

export abstract class GetBackgroundControllerFactory {
    private static _instance: GetBackgroundControllerContract;

    public static execute(): GetBackgroundControllerContract {
        if (!this._instance) {
            this._instance = new GetBackgroundController(
                GetBackgroundRepositoryFactory.execute()
            );
        }

        return this._instance;
    }
}