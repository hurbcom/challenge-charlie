import { GetLocationDetailsByCoordinatesRepositoryContract, GetLocationDetailsByCoordinatesRepositoryInput, GetLocationDetailsByCoordinatesRepositoryOutput } from "@challenge-charlie/backend/weather-forecast/application/contracts/repositories";
import { Address, Currency } from "@challenge-charlie/backend/weather-forecast/enterprise/entities";

export class GetLocationDetailsByCoordinatesRepository
  implements GetLocationDetailsByCoordinatesRepositoryContract {
  public async execute({
    latitude, longitude,
  }: GetLocationDetailsByCoordinatesRepositoryInput): Promise<GetLocationDetailsByCoordinatesRepositoryOutput> {
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=a0f1a844dd9c455182b5b8d3e33e0839&language=pt-br`
    );

    const { results } = await response.json();

    const { components, formatted, annotations } = results[0];
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

    return {
      address,
      currency,
    };
  }
}
