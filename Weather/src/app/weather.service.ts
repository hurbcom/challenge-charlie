import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
url = 'https://api.openweathermap.org/data/2.5/weather';
apikey = '7ba73e0eb8efe773ed08bfd0627f07b8';
lang = 'pt_br'
  constructor(private http: HttpClient) { }


getWeatherDataByCoords(lat, lon){
  let params = new HttpParams()
  .set('lat', lat)
  .set('lon', lon)
  .set('units', 'metric')
  .set('appid', this.apikey)
  .set('lang', this.lang)

  return this.http.get(this.url, {params});
}

getWeatherByCity(city: string){
  let params = new HttpParams()
  .set('q', city)
  .set('units', 'metric')
  .set('appid', this.apikey)
  .set('lang', this.lang)
  return this.http.get(this.url, {params});
}
}
