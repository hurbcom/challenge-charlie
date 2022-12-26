import { LocationOverview } from "@challenge-charlie/backend/weather-forecast/enterprise/entities";

export type GetLocationOverviewByAddressControllerInput = {
  address: string;
};

export type GetLocationOverviewByAddressControllerOutput = {
  location: LocationOverview;
};

export type GetLocationOverviewByAddressControllerContract = {
  execute(
    input: GetLocationOverviewByAddressControllerInput
  ): Promise<GetLocationOverviewByAddressControllerOutput>;
};
