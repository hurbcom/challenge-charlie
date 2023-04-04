import LocationService from '@/api/services/LocationService';
import { LocalityType } from '@/types/global';
import { LocationResultsPayload } from '@/types/payload';

class OpenCageService extends LocationService {
  url =
    `https://api.opencagedata.com/geocode/v1/json?` +
    `no_annotations=1&key=${this.apiKey}&q=${this.latitude},${this.longitude}`;

  constructor({ latitude, longitude }: LocalityType) {
    super({ latitude, longitude, apiKey: process.env.OPENCAGE_API_KEY || '' });
  }

  public async retrieveLocation(): Promise<LocationResultsPayload> {
    return await fetch(this.url).then(async (res) => {
      const { results } = await res.json();
      return results;
    });
  }
}

export default OpenCageService;
