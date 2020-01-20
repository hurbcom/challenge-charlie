import OpenWeatherService from '../external/OpenWeatherService';

export default class WeatherService  {
  constructor() {
    this.openWeatherService = new OpenWeatherService();
  }
  
  async getWeatherByCoord(latitude, longitude) {
    return this.openWeatherService.getWeatherByCoord(latitude, longitude);
  }
}