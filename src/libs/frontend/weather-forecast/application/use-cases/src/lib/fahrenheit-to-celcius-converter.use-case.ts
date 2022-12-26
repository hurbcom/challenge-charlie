import {
    TemperatureConverterUseCaseContract,
    TemperatureConverterUseCaseInput,
    TemperatureConverterUseCaseOutput
} from '@challenge-charlie/frontend/weather-forecast/application/contracts/use-cases';


export class FahrenheitToCelciusConverterUseCase
    implements TemperatureConverterUseCaseContract {
    public execute(
        input: TemperatureConverterUseCaseInput
    ): TemperatureConverterUseCaseOutput {
        console.log("🚀 ~ file: fahrenheit-to-celcius-converter.use-case.ts:13 ~ input", input)
        const newTemp = Math.round((input.forecast.temp - 32) * 5/9);

        return {
            forecast: {
                ...input.forecast,
                temp: newTemp,
                tempSymbol: '°C',
            },
        };
    }
}
