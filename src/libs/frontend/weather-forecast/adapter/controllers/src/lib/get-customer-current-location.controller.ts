import { GetCustomerCurrentLocationControllerContract, GetCustomerCurrentLocationControllerOutput } from "@challenge-charlie/frontend/weather-forecast/adapter/contracts/controllers";
import { GetCustomerCurrentLocationUseCaseContract } from "@challenge-charlie/frontend/weather-forecast/application/contracts/use-cases";


export class GetCustomerCurrentLocationController
  implements GetCustomerCurrentLocationControllerContract
{
  constructor(
    private readonly getCustomerCurrentLocationUseCase: GetCustomerCurrentLocationUseCaseContract
  ) {}

  public async execute(): Promise<GetCustomerCurrentLocationControllerOutput> {
    const output = await this.getCustomerCurrentLocationUseCase.execute();

    return {
      location: output.location,
    };
  }
}
