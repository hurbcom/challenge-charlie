import LocationService from '@/api/services/LocationService';
import { LocalityType } from '@/types/global';

class OpenWeatherService extends LocationService {
  queryParams = `?lang=pt_br&units=metric&appid=${this.apiKey}&lat=${this.latitude}&lon=${this.longitude}`;
  endpoint: 'forecast' | 'weather' = 'forecast';
  url = `https://api.openweathermap.org/data/2.5/${this.endpoint}${this.queryParams}`;

  constructor({ latitude, longitude }: LocalityType) {
    super({ latitude, longitude, apiKey: process.env.OPENWEATHER_API_KEY || '' });
  }

  public async retrieveForecast(): Promise<{ list: Array<Object>; city: Object; _: any }> {
    this.endpoint = 'forecast';
    return await fetch(this.url).then(async (res) => {
      return await res.json();
    });
  }

  public async retrieveCurrentWeather(): Promise<{ list: Array<Object>; _: any }> {
    this.endpoint = 'weather';
    return await fetch(this.url).then(async (res) => {
      return await res.json();
    });
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
