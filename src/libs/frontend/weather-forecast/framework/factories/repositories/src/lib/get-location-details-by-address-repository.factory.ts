import { GetLocationDetailsByAddressRepositoryContract } from "@challenge-charlie/frontend/weather-forecast/application/contracts/repositories";
import { GetLocationDetailsByAddressRepository } from "@challenge-charlie/frontend/weather-forecast/framework/repositories/bff";

export abstract class GetLocationDetailsByAddressRepositoryFactory {
    private static _instance: GetLocationDetailsByAddressRepositoryContract;

    public static execute(): GetLocationDetailsByAddressRepositoryContract {
        if (!this._instance) {
            this._instance = new GetLocationDetailsByAddressRepository();
        }

        return this._instance
    }
}