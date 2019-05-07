import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

import { Background } from './background';

@Injectable()
export class BackgroundService {

  constructor(private http: HttpClient) { }

  getBackgroundUrl() : Observable<Background> {
    return this.http.get(`${environment.api}/background`);
  }

}