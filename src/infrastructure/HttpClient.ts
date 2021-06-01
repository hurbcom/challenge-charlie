import axios from 'axios';

export default class HttpClient {
  static get(url: string) {
    return axios.get(url);
  }

  static post(url: string, body: any) {
    return axios.post(url, body);
  }

  static put(url: string, body: any) {
    return axios.put(url, body);
  }

  static patch(url: string, body: any) {
    return axios.patch(url, body);
  }

  static delete(url: string) {
    return axios.delete(url);
  }
}
