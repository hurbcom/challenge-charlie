import LocationService from '@/api/services/LocationService';
import { LocalityType } from '@/types/global';

class OpenWeatherService extends LocationService {
  url =
    `https://api.openweathermap.org/data/2.5/forecast?` +
    `lang=pt_br&appid=${this.apiKey}&lat=${this.latitude}&lon=${this.longitude}`;

  constructor({ latitude, longitude }: LocalityType) {
    super({ latitude, longitude, apiKey: process.env.OPENWEATHER_API_KEY || '' });
  }

  public async retrieveForecast(): Promise<JSON> {
    return await fetch(this.url).then(async (res) => {
      return await res.json();
    });
  }
}

export default OpenWeatherService;
