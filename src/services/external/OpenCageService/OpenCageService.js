import axios from 'axios';
import config from '../../../config';

export default class OpenCageService {
  constructor() {
    this.key = config.openCageKey;
  }

  async findLocationByName(locationName) {
    try {
      const url = `https://api.opencagedata.com/geocode/v1/json?language=pt-BR&q=${locationName}&key=${this.key}`;
      const response = await axios.get(url);
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getLocation(latitude, longitude) {
    try {
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${this.key}`;
      const response = await axios.get(url);
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}