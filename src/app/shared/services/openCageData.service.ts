import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from './../../../environments/environment';

const endpoint = environment.openCageData;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class OpenCageDataService {

  constructor(private http: HttpClient) { }

  getCurrentLocationByLatLong(lat, long): Observable<any> {
    return this.http.get(`${endpoint}${lat},${long}`);
  }

  getCurrentLocationByName(name): Observable<any> {
    return this.http.get(`${endpoint}${name}`);
  }
}
