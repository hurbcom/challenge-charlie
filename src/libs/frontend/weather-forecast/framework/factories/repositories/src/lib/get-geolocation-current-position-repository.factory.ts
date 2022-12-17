import { GetGeolocationCurrentPositionRepositoryContract } from "@challenge-charlie/frontend/weather-forecast/application/contracts/repositories";
import { GetGeolocationCurrentPositionRepository } from "@challenge-charlie/frontend/weather-forecast/framework/repositories/geolocation";


export abstract class GetGeolocationCurrentPositionRepositoryFactory {
    private static _instance: GetGeolocationCurrentPositionRepositoryContract;

    public static execute(): GetGeolocationCurrentPositionRepositoryContract {
        if (!this._instance) {
            this._instance = new GetGeolocationCurrentPositionRepository();
        }

        return this._instance
    }
}