import HttpClient from '../infrastructure/HttpClient';
import constants from '../constants';
import OpenCageGeocodingServiceAdapter from '../adapters/OpenCageGeocodingServiceAdapter';

interface IOpenCageGeocodingAPIParameters {
  lat: number | undefined;
  lon: number | undefined;
  lang?: string;
}

export default class OpenCageGeocodingService {
  private url: string = constants.OPENCAGEGEOCODING_API;

  async getLocationByLatLong({ lat, lon, lang = 'pt_br' }: IOpenCageGeocodingAPIParameters) {
    try {
      const { data } = await HttpClient.get(
        `${this.url}geocode/v1/json?q=${lat},${lon}&language=${lang}`,
      );
      return Promise.resolve(new OpenCageGeocodingServiceAdapter().getCurrentLocation(data));
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
