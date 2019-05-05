import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherFromLocation(location: string): Observable<any> {
    return this.getWeather(`location=${location}`);
  }

  getWeatherFromLatLon(lat: number, lon: number): Observable<any> {
    return this.getWeather(`lat=${lat}&lon=${lon}`);
  }

  private getWeather(querystring: string): Observable<any> {
    return this.http.get(`${environment.api}/weather?${querystring}`);
  }

}