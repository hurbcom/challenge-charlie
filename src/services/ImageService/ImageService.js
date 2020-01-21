import BingService from '../external/BingService';

export default class ImageService {
  constructor() {
    this.bingService = new BingService();
  }

  getUrl() {
    return this.bingService.getImageUrl();
  }
}