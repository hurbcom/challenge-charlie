import { GetLocationDetailsByCoordinatesRepositoryContract } from "@challenge-charlie/frontend/weather-forecast/application/contracts/repositories";
import { GetLocationDetailsByCoordinatesRepository } from "@challenge-charlie/frontend/weather-forecast/framework/repositories/bff";


export abstract class GetLocationDetailsByCoordinatesRepositoryFactory {
    private static _instance: GetLocationDetailsByCoordinatesRepositoryContract;

    public static execute(): GetLocationDetailsByCoordinatesRepositoryContract {
        if (!this._instance) {
            this._instance = new GetLocationDetailsByCoordinatesRepository();
        }

        return this._instance
    }
}