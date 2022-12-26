import { Address, Currency } from "@challenge-charlie/backend/weather-forecast/enterprise/entities";

export type GetLocationDetailsByCoordinatesRepositoryInput = {
  latitude: string;
  longitude: string;
};
export type GetLocationDetailsByCoordinatesRepositoryOutput = {
  address: Address;
  currency: Currency;
};
export type GetLocationDetailsByCoordinatesRepositoryContract = {
  execute(
    input: GetLocationDetailsByCoordinatesRepositoryInput
  ): Promise<GetLocationDetailsByCoordinatesRepositoryOutput>;
};
