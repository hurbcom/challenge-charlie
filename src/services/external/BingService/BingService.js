import axios from 'axios';

export default class BingService {
  constructor() {
    this.urlBase = `https://www.bing.com`;
  }
  
  getImageData() {
    //@TODO fazer tratamento de erros
    //https://github.com/Rob--W/cors-anywhere/#documentation
    const corsAnyWhere = 'https://cors-anywhere.herokuapp.com/'; 
    const url = `${corsAnyWhere}${this.urlBase}/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`;
    const headers = { 'X-Requested-With': 'Charllie Chalenge' };
    return axios.get(url, {headers}).then(response => response.data);
  }
  
  getImageUrl() {
    return this.getImageData().then((imageData) => {
      return `${this.urlBase}${imageData.images[0].url}`;
    })
  }
}