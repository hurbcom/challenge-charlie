import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class BingService {

  constructor(private http: HttpClient) { }

  getBackgroundUrl() : Observable<any> {
    return this.http.get(`${environment.api}/bing/background`);
  }

}