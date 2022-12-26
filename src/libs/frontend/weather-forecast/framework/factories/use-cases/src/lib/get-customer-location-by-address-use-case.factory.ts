import { GetCustomerLocationByAddressUseCaseContract } from "@challenge-charlie/frontend/weather-forecast/application/contracts/use-cases";
import { GetCustomerLocationByAddressUseCase } from "@challenge-charlie/frontend/weather-forecast/application/use-cases";
import { GetLocationDetailsByAddressRepositoryFactory } from "@challenge-charlie/frontend/weather-forecast/framework/factories/repositories";
import { GetColorByTemperatureUseCaseFactory } from "./get-color-by-temperature-use-case.factory";

export abstract class GetCustomerLocationByAddressUseCaseFactory {
    private static _instance: GetCustomerLocationByAddressUseCaseContract;

    public static execute(): GetCustomerLocationByAddressUseCaseContract {

        if (!this._instance) {
            this._instance = new GetCustomerLocationByAddressUseCase(
                GetLocationDetailsByAddressRepositoryFactory.execute(),
                GetColorByTemperatureUseCaseFactory.execute()
            )
        }

        return this._instance;
    }
}
