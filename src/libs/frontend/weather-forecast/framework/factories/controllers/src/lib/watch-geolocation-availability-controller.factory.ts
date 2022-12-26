import { WatchGeolocationAvailabilityControllerContract } from "@challenge-charlie/frontend/weather-forecast/adapter/contracts/controllers";
import { WatchGeolocationAvailabilityController } from "@challenge-charlie/frontend/weather-forecast/adapter/controllers";
import { WatchGeolocationAvailabilityRepositoryFactory } from "@challenge-charlie/frontend/weather-forecast/framework/factories/repositories";

export abstract class WatchGeolocationAvailabilityControllerFactory {
    private static _instance: WatchGeolocationAvailabilityControllerContract;

    public static execute(): WatchGeolocationAvailabilityControllerContract {
        if (!this._instance) {
            this._instance = new WatchGeolocationAvailabilityController(
                WatchGeolocationAvailabilityRepositoryFactory.execute()
            )
        }

        return this._instance
    }
}