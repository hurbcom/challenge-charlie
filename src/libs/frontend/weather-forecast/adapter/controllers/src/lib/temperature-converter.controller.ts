import { TemperatureConverterControllerContract, TemperatureConverterControllerInput, TemperatureConverterControllerOutput } from "@challenge-charlie/frontend/weather-forecast/adapter/contracts/controllers";
import { TemperatureConverterUseCaseContract } from "@challenge-charlie/frontend/weather-forecast/application/contracts/use-cases";


export class TemperatureConverterController implements TemperatureConverterControllerContract {
    constructor(
        private temperatureConverterUseCase: TemperatureConverterUseCaseContract
    ) {}
    
    public execute(input: TemperatureConverterControllerInput): TemperatureConverterControllerOutput {
        const { forecast } = this.temperatureConverterUseCase.execute({
            forecast: input.forecast
        });

        return {
            forecast,
        }
    }
}