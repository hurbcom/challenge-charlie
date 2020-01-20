import BingService from '../external/BingService';

export default class ImageService {
  constructor() {
    this.bingService = new BingService();
  }

  async getUrl() {
    return this.bingService.getImageUrl();
  }
}