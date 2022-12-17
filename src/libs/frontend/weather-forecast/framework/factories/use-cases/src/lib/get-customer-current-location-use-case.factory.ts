import { GetCustomerCurrentLocationUseCaseContract } from "@challenge-charlie/frontend/weather-forecast/application/contracts/use-cases";
import { GetCustomerCurrentLocationUseCase } from "@challenge-charlie/frontend/weather-forecast/application/use-cases";
import { GetGeolocationCurrentPositionRepositoryFactory, GetLocationDetailsByCoordinatesRepositoryFactory } from "@challenge-charlie/frontend/weather-forecast/framework/factories/repositories";

export abstract class GetCustomerCurrentLocationUseCaseFactory {
    private static _instance: GetCustomerCurrentLocationUseCaseContract;

    public static execute(): GetCustomerCurrentLocationUseCaseContract {

        if (!this._instance) {
            this._instance = new GetCustomerCurrentLocationUseCase(
                GetGeolocationCurrentPositionRepositoryFactory.execute(),
                GetLocationDetailsByCoordinatesRepositoryFactory.execute(),
            )
        }

        return this._instance;
    }
}