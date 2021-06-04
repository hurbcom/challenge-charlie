import HttpClient from '../infrastructure/HttpClient';
import constants from '../constants';
import NominatimServiceAdapter from '../adapters/NominatimServiceAdapter';

interface INominatimAPIParameters {
  lat: number | undefined;
  lon: number | undefined;
}

export default class NominatimService {
  private url: string = constants.NOMINATIM_API;

  async getLocationByLatLong({ lat, lon }: INominatimAPIParameters) {
    try {
      const { data } = await HttpClient.get(`${this.url}reverse?format=json&lat=${lat}&lon=${lon}`);
      return Promise.resolve(new NominatimServiceAdapter().getCurrentLocation(data));
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
