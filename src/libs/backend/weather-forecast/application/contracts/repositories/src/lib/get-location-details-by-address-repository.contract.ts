import { Address, Currency } from "@challenge-charlie/backend/weather-forecast/enterprise/entities";

export type GetLocationDetailsByAdressRepositoryInput = {
  address: string;
};

export type GetLocationDetailsByAdressRepositoryOutput = {
  address: Address;
  currency: Currency;
  latitude: string;
  longitude: string;
};

export type GetLocationDetailsByAdressRepositoryContract = {
  execute(
    input: GetLocationDetailsByAdressRepositoryInput
  ): Promise<GetLocationDetailsByAdressRepositoryOutput>;
};
