import { LocationOverview } from "@challenge-charlie/backend/weather-forecast/enterprise/entities";

export type GetLocationOverviewByCoordinatesControllerInput = {
  latitude: string;
  longitude: string;
};
export type GetLocationOverviewByCoordinatesControllerOutput = {
  location: LocationOverview;
};
export type GetLocationOverviewByCoordinatesControllerContract = {
  execute(
    input: GetLocationOverviewByCoordinatesControllerInput
  ): Promise<GetLocationOverviewByCoordinatesControllerOutput>;
};
