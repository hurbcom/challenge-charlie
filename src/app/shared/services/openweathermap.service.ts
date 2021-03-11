import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import * as moment from 'moment';
import { ReduxService } from './redux.service';

const currentEndpoint = environment.openWeatherMap;
const forecastEndpoint = environment.openWeatherMapForecast;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherMapService {
  meter;
  weatherIcons = {
    "01d": "B",
    "01n": "1",
    "02d": "H",
    "02n": "3",
    "03d": "N",
    "03n": "5",
    "04d": "Y",
    "04n": "%",
    "09d": "X",
    "09n": "$",
    "10d": "R",
    "10n": "8",
    "11d": "Z",
    "11n": "6",
    "13d": "W",
    "13n": "#",
    "50d": "M",
    "50n": "M",
  };

  constructor(
    private http: HttpClient,
    private redux: ReduxService
  ) {
    this.redux.currentMeter.subscribe(r => {
      this.meter = r;
    })
  }

  getCurrentWeather(city): Observable<any> {
    return this.http.get(currentEndpoint + city);
  }

  getForecastWeather(city): Observable<any> {
    return this.http.get(forecastEndpoint + city);
  }

  getNextDaysWeather(forecast) {
    let currentDay = moment().startOf('day');
    let nextDays = [];

    forecast.list.map(m => {
      let checkDiff = moment(m.dt_txt).startOf('day').diff(currentDay, 'days');

      if (checkDiff == 1 && !nextDays['tomorrow']) {
        nextDays['tomorrow'] = { temp: Math.floor(m.main.temp), color: this.getTemperatureColor(Math.floor(m.main.temp)) };
      }

      if (checkDiff == 2 && !nextDays['afterTomorrow']) {
        nextDays['afterTomorrow'] = { temp: Math.floor(m.main.temp), color: this.getTemperatureColor(Math.floor(m.main.temp)) };
      }
    })

    return nextDays;
  }

  getTemperatureColor(temp) {
    if (temp < 15) {
      return 'cold';
    } else if (temp > 35) {
      return 'hot';
    } else if (temp > 14 && temp < 36) {
      return 'normal';
    } else {
      return 'default'
    }
  }

  convertTemperature(temp) {
    if (this.meter == "F") {
      return (temp * 9 / 5 + 32);
    } else if (this.meter == "C") {
      return Math.trunc(Math.floor((temp - 32) * 5 / 9));
    }
  }

  getWeatherIcon(icon) {
    return this.weatherIcons[icon];
  }
}
