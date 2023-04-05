import LocationService from '@/api/services/LocationService';
import { LocalityType } from '@/types/global';

class OpenWeatherService extends LocationService {
  queryParams = `?lang=pt_br&units=metric&appid=${this.apiKey}&lat=${this.latitude}&lon=${this.longitude}`;
  endpoint: 'forecast' | 'weather';
  url = `https://api.openweathermap.org/data/2.5/`;

  constructor({ latitude, longitude }: LocalityType) {
    super({ latitude, longitude, apiKey: process.env.OPENWEATHER_API_KEY || '' });
    this.endpoint = 'forecast';
    this.url += this.endpoint + this.queryParams;
  }

  public async retrieveForecast(): Promise<{ list: Array<Object>; city: any; _: any }> {
    return await fetch(this.url)
      .then(async (res) => {
        return await res.json();
      })
      .catch((err) => console.log(err));
  }

  static convertTemperature(temperature: number, toCelsius: boolean = true) {
    const celcius = Math.round(temperature - 273.15);
    const fahrenheit = Math.round((temperature - 273.15) * 1.8 + 32);
    return toCelsius ? celcius : fahrenheit;
  }

  static windDegreeToDirection(degree: number) {
    if (degree > 337.5) return 'N';
    if (degree > 292.5) return 'NW';
    if (degree > 247.5) return 'W';
    if (degree > 202.5) return 'SW';
    if (degree > 157.5) return 'S';
    if (degree > 122.5) return 'SE';
    if (degree > 67.5) return 'E';
    if (degree > 22.5) {
      return 'NE';
    }
    return 'N';
  }
}

export default OpenWeatherService;
