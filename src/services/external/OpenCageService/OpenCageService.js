import axios from 'axios';
import config from '../../../config';

export default class OpenCageService {
  constructor() {
    this.key = config.openCageKey;
  }

  findLocationByName(locationName) {
    //@TODO fazer tratamento de erros
    const url = `https://api.opencagedata.com/geocode/v1/json?language=pt-BR&q=${locationName}&key=${this.key}`;
    return axios.get(url).then(response => response.data);
  }

  getLocation(latitude, longitude) {
    //@TODO fazer tratamento de erros
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${this.key}`;
    return axios.get(url).then(response => response.data);
  }
}