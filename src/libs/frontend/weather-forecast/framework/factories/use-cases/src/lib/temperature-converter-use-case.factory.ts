import { TemperatureConverterUseCaseContract } from "@challenge-charlie/frontend/weather-forecast/application/contracts/use-cases";
import { CelciusToFahrenheitConverterUseCase, FahrenheitToCelciusConverterUseCase, TemperatureConverterUseCase } from "@challenge-charlie/frontend/weather-forecast/application/use-cases";

export abstract class TemperatureConverterUseCaseFactory {
    private static _instance: TemperatureConverterUseCaseContract

    public static execute(): TemperatureConverterUseCaseContract {
        if (!this._instance) {
            this._instance = new TemperatureConverterUseCase(
                {
                    '°C': new CelciusToFahrenheitConverterUseCase(),
                    '°F': new FahrenheitToCelciusConverterUseCase()
                }
            )
        }

        return this._instance
    }
}
