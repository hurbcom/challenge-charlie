import {
  GetColorByTemperatureUseCaseContract,
  GetColorByTemperatureUseCaseInput,
  GetColorByTemperatureUseCaseOutput,
} from '@challenge-charlie/frontend/weather-forecast/application/contracts/use-cases';

export class GetColorByTemperatureUseCase
  implements GetColorByTemperatureUseCaseContract
{
  public execute(
    input: GetColorByTemperatureUseCaseInput
  ): GetColorByTemperatureUseCaseOutput {
    let color = 'yellow';

    if (input.temperature > 35) {
      color = 'red';
    } else if (input.temperature < 15) {
      color = 'blue';
    }

    return {
      color,
    };
  }
}
