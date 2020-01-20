import axios from 'axios';

export default class BingService {
  constructor() {
    this.urlBase = `https://www.bing.com`;
  }
  
  async getImageData() {
    try {
      //https://github.com/Rob--W/cors-anywhere/#documentation
      const corsAnyWhere = 'https://cors-anywhere.herokuapp.com/'; 
      const url = `${corsAnyWhere}${this.urlBase}/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`;
      
      const response = await axios.get(url, {
        headers: { 'X-Requested-With': 'Charllie Chalenge' }
      });
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  
  async getImageUrl() {
    return this.getImageData().then((imageData) => {
      return `${this.urlBase}${imageData.images[0].url}`;
    })
  }
}