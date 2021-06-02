import BingServiceAdapter from '../adapters/BingServiceAdapter';
import HttpClient from '../infrastructure/HttpClient';
import constants from '../constants';

export default class BingService {
  private url: string = constants.BING_API;

  async getCurrentWallpaper(): Promise<{ backgroundImage: string }> {
    try {
      const { data } = await HttpClient.get(`${this.url}/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`);
      return Promise.resolve(new BingServiceAdapter().getCurrentWallpaper(data));
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
