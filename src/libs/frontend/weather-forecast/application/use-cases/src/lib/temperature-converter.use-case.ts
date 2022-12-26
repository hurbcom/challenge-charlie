import {
  TemperatureConverterUseCaseContract,
  TemperatureConverterUseCaseInput,
  TemperatureConverterUseCaseOutput,
} from '@challenge-charlie/frontend/weather-forecast/application/contracts/use-cases';

export class TemperatureConverterUseCase
  implements TemperatureConverterUseCaseContract
{
  constructor(
    private readonly strategies: Record<
        '°C' | '°F',
      TemperatureConverterUseCaseContract
    >
  ) {}

  public execute(
    input: TemperatureConverterUseCaseInput
  ): TemperatureConverterUseCaseOutput {
    const { forecast } =
      this.strategies[input.forecast.tempSymbol].execute(input);

    return {
      forecast,
    };
  }
}
