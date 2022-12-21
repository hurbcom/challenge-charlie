import {
  GetLocationDetailsByAddressRepositoryContract,
  GetLocationDetailsByAddressRepositoryInput,
  GetLocationDetailsByAddressRepositoryOutput,
} from '@challenge-charlie/frontend/weather-forecast/application/contracts/repositories';
import { environment } from '../environments/environment';

export class GetLocationDetailsByAddressRepository
  implements GetLocationDetailsByAddressRepositoryContract
{
  public async execute({
    address,
  }: GetLocationDetailsByAddressRepositoryInput): Promise<GetLocationDetailsByAddressRepositoryOutput> {
    const url = `${environment.bffs.weatherForecast.baseUrl}${environment.bffs.weatherForecast.endpoints.locationDetailsByAddress}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ address }),
    });

    const { data, status } = await response.json();

    if (!response.ok) {
        throw new Error(status)
    }

    console.log(
      '🚀 ~ file: get-location-details-by-Address.repository.ts:19 ~ GetLocationDetailsByAddressRepository ~ execute ~ data',
      data
    );

    return {
      location: {
        address: data.address,
        currency: data.currency,
        weatherForecast: data.weather,
      },
    };
  }
}
