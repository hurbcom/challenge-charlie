import {
    TemperatureConverterUseCaseContract,
    TemperatureConverterUseCaseInput,
    TemperatureConverterUseCaseOutput
} from '@challenge-charlie/frontend/weather-forecast/application/contracts/use-cases';


export class CelciusToFahrenheitConverterUseCase
    implements TemperatureConverterUseCaseContract {
    public execute(
        input: TemperatureConverterUseCaseInput
    ): TemperatureConverterUseCaseOutput {
        console.log("🚀 ~ file: celcius-to-fahrenheit-converter.useCase.ts:13 ~ input", input)
        const newTemp = Math.round((input.forecast.temp * 9/5) + 32);

        return {
            forecast: {
                ...input.forecast,
                temp: newTemp,
                tempSymbol: '°F',
            },
        };
    }
}
