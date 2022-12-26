import { GetBackgroundImageURLRepositoryContract } from "@challenge-charlie/backend/utility/application/contracts/repositories";
import { GetBackgroundImageURLRepository } from "@challenge-charlie/backend/utility/framework/repositories/bing";
import { GetBackgroundImageURLCachedRepository } from "@challenge-charlie/backend/utility/framework/repositories/redis";

export abstract class GetBackgroundImageURLRepositoryFactory {
    private static _instance: GetBackgroundImageURLRepositoryContract;

    public static execute(): GetBackgroundImageURLRepositoryContract {
        if (!this._instance) {
            this._instance = new GetBackgroundImageURLCachedRepository(
                new GetBackgroundImageURLRepository()
            );
        }

        return this._instance;
    }
}
