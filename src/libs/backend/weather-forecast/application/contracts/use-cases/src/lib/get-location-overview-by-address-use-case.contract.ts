import { LocationOverview } from "@challenge-charlie/backend/weather-forecast/enterprise/entities";

export type GetLocationOverviewByAddressUseCaseInput = {
  address: string;
};

export type GetLocationOverviewByAddressUseCaseOutput = {
  location: LocationOverview;
};

export type GetLocationOverviewByAddressUseCaseContract = {
  execute(
    input: GetLocationOverviewByAddressUseCaseInput
  ): Promise<GetLocationOverviewByAddressUseCaseOutput>;
};
