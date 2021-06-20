import axios, { AxiosInstance } from 'axios';

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
}

export default new CharlieAPI();
