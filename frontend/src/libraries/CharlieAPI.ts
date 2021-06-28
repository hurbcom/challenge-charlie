import axios, { AxiosInstance } from 'axios';
import ExceptionHandler from '@exceptions/CharlieAPI/ExceptionHandler';

import {
  GetWeatherByLocationParams,
} from 'src/interfaces/GetWeatherByLocationParams';

import {
  GetWeatherByLocationResponse,
} from 'src/interfaces/GetWeatherByLocationResponse';

class CharlieAPI {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: 'http://localhost:3333',
    });
  }

  public async getImage(): Promise<string> {
    const response = await this.axios.get('/bing-image');

    return response.data.url;
  }

  public async getWeather(
    params: GetWeatherByLocationParams,
  ): Promise<GetWeatherByLocationResponse> {
    try {
      const response = await this.axios.get<GetWeatherByLocationResponse>(
        '/weather-location', {
          params,
        },
      );

      return response.data;
    } catch (error) {
      throw new ExceptionHandler(error.response.data);
    }
  }
}

export default new CharlieAPI();
