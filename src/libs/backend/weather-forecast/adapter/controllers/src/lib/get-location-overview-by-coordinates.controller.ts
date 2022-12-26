import { GetLocationOverviewByCoordinatesControllerContract, GetLocationOverviewByCoordinatesControllerInput, GetLocationOverviewByCoordinatesControllerOutput } from "@challenge-charlie/backend/weather-forecast/adapter/contracts/controllers";
import { GetLocationOverviewByCoordinatesUseCaseContract } from "@challenge-charlie/backend/weather-forecast/application/contracts/use-cases";


export class GetLocationOverviewByCoordinatesController
  implements GetLocationOverviewByCoordinatesControllerContract {
  constructor(
    private readonly getLocationOverviewUseCase: GetLocationOverviewByCoordinatesUseCaseContract
  ) { }

  public async execute({
    latitude, longitude,
  }: GetLocationOverviewByCoordinatesControllerInput): Promise<GetLocationOverviewByCoordinatesControllerOutput> {
    const { location } = await this.getLocationOverviewUseCase.execute({
      latitude,
      longitude,
    });

    return {
      location,
    };
  }
}
