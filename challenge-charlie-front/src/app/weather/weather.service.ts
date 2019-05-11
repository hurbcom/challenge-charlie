import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Weather } from './weather';
import { Temperature } from './temperature/temperature';
import { Wind } from './wind/wind';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeathersWithLocation(location: string): Observable<any> {
    return this.getWeathersFromApi(`location=${location}`);
  }

  getWeathersWithCoordinate(lat: number, lon: number): Observable<any> {
    return this.getWeathersFromApi(`lat=${lat}&lon=${lon}`);
  }

  getWeathersFromApi(querystring: string): Observable<any> {
    return this.http.get(`${environment.api}/weather?${querystring}`).pipe(
      map((response: any) => {
        response.weathers = response.weathers.map(this.createWeatherInstance);
        return response;
      }));
  }

  createWeatherInstance(weather: any): Weather {
    return new Weather(
      weather.date,
      weather.actualTemperature ? new Temperature(weather.actualTemperature.celsius) : null,
      new Temperature(weather.maxTemperature.celsius),
      new Temperature(weather.minTemperature.celsius),
      weather.text,
      weather.wind != null ? new Wind(weather.wind.direction, weather.wind.speed) : null,
      weather.humidity,
      weather.pressure,
      weather.icon
    );
  }

}