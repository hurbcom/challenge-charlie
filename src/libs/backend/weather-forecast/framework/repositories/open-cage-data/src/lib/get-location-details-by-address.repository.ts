import { GetLocationDetailsByAdressRepositoryContract, GetLocationDetailsByAdressRepositoryInput, GetLocationDetailsByAdressRepositoryOutput } from "@challenge-charlie/backend/weather-forecast/application/contracts/repositories";
import { Address, Currency } from "@challenge-charlie/backend/weather-forecast/enterprise/entities";

export class GetLocationDetailsByAdressRepository
  implements GetLocationDetailsByAdressRepositoryContract {
  public async execute(
    input: GetLocationDetailsByAdressRepositoryInput
  ): Promise<GetLocationDetailsByAdressRepositoryOutput> {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${input.address}&key=a0f1a844dd9c455182b5b8d3e33e0839&language=pt-br`;

    const response = await fetch(url);

    const { results } = await response.json();

    const { components, formatted, annotations, geometry } = results[0];
    const address: Address = {
      city: components.city,
      formatted: formatted,
    };

    const { iso_code: isoCode, name, symbol } = annotations.currency;

    const currency: Currency = {
      isoCode,
      name,
      symbol,
    };

    const { lat: latitude, lng: longitude } = geometry;

    return {
      address,
      currency,
      latitude,
      longitude,
    };
  }
}
