import axios, { AxiosInstance } from 'axios';

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
    const response = await this.axios.get<GetWeatherByLocationResponse>(
      '/weather-location', {
        params,
      },
    );

    return response.data;
  }
}

export default new CharlieAPI();
