import LocationService from '@/api/services/LocationService';
import { LocalityType } from '@/types/global';

class OpenCageService extends LocationService {
  url =
    `https://api.opencagedata.com/geocode/v1/json?` +
    `no_annotations=1&key=${this.apiKey}&q=${this.latitude},${this.longitude}`;

  constructor({ latitude, longitude }: LocalityType) {
    super({ latitude, longitude, apiKey: process.env.OPENCAGE_API_KEY || '' });
  }

  public async retrieveLocation(): Promise<{results: Array<object>, _: any}> {
    return await fetch(this.url).then(async (res) => {
      return await res.json();
    });
  }
}

export default OpenCageService;
