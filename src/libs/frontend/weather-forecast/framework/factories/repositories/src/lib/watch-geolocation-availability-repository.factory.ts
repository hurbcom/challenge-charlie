import { WatchGeolocationAvailabilityRepositoryContract } from "@challenge-charlie/frontend/weather-forecast/application/contracts/repositories";
import { WatchGeolocationAvailabilityRepository } from "@challenge-charlie/frontend/weather-forecast/framework/repositories/geolocation";

export abstract class WatchGeolocationAvailabilityRepositoryFactory {
    private static _instance: WatchGeolocationAvailabilityRepositoryContract;

    public static execute(): WatchGeolocationAvailabilityRepositoryContract {
        if (!this._instance) {
            this._instance = new WatchGeolocationAvailabilityRepository()
        }

        return this._instance
    }
}