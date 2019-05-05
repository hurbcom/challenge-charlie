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

  getWeatherFromLatLon(coords: Coordinates): Observable<any> {
    return this.getWeather(`lat=${coords.latitude}&lon=${coords.longitude}`);
  }

  private getWeather(querystring: string): Observable<any> {
    return this.http.get(`${environment.api}/weather?${querystring}`);
  }

}