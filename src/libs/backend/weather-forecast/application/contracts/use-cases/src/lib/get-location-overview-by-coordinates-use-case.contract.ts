import { LocationOverview } from "@challenge-charlie/backend/weather-forecast/enterprise/entities";

export type GetLocationOverviewByCoordinatesUseCaseInput = {
  latitude: string;
  longitude: string;
};
export type GetLocationOverviewByCoordinatesUseCaseOutput = {
  location: LocationOverview;
};
export type GetLocationOverviewByCoordinatesUseCaseContract = {
  execute(
    input: GetLocationOverviewByCoordinatesUseCaseInput
  ): Promise<GetLocationOverviewByCoordinatesUseCaseOutput>;
};
