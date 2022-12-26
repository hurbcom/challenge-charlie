import { GetBackgroundImageURLControllerContract } from "@challenge-charlie/backend/utility/adapter/contracts/controllers";
import { GetBackgroundImageURLController } from "@challenge-charlie/backend/utility/adapter/controllers";
import { GetBackgroundImageURLRepositoryFactory } from "@challenge-charlie/backend/utility/framework/factories/repositories";


export abstract class GetBackgroundImageURLControllerFactory {
    private static _instance: GetBackgroundImageURLControllerContract;

    public static execute(): GetBackgroundImageURLControllerContract {
        if (!this._instance) {
            this._instance = new GetBackgroundImageURLController(
                GetBackgroundImageURLRepositoryFactory.execute()
            );
        }

        return this._instance;
    }
}
