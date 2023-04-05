import LocationService from '@/api/services/LocationService';
import { LocationResultsParams } from '@/types/params';
import { LocationResultsPayload } from '@/types/payload';

class OpenCageService extends LocationService {
  queryParams = `q=${this.latitude},${this.longitude}`;
  url = `https://api.opencagedata.com/geocode/v1/json?no_annotations=1&key=${this.apiKey}&`;

  constructor({ latitude, longitude, address }: LocationResultsParams) {
    super({ latitude, longitude, apiKey: process.env.OPENCAGE_API_KEY || '' });
    if (!!address) this.queryParams = `&q=${address}`;
    this.url += `${this.queryParams}`;
  }

  public async retrieveLocation(): Promise<LocationResultsPayload> {
    return await fetch(this.url).then(async (res) => {
      const { results } = await res.json();
      return results;
    });
  }
}

export default OpenCageService;
