import { GetLocationOverviewByAddressControllerContract, GetLocationOverviewByAddressControllerInput, GetLocationOverviewByAddressControllerOutput } from "@challenge-charlie/backend/weather-forecast/adapter/contracts/controllers";
import { GetLocationOverviewByAddressUseCaseContract } from "@challenge-charlie/backend/weather-forecast/application/contracts/use-cases";

export class GetLocationOverviewByAddressController
  implements GetLocationOverviewByAddressControllerContract {
  constructor(
    private readonly getLocationOverviewUseCase: GetLocationOverviewByAddressUseCaseContract
  ) { }

  public async execute({
    address,
  }: GetLocationOverviewByAddressControllerInput): Promise<GetLocationOverviewByAddressControllerOutput> {
    const { location } = await this.getLocationOverviewUseCase.execute({
      address,
    });

    return {
      location,
    };
  }
}
