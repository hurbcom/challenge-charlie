import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
url = 'http://api.openweathermap.org/data/2.5/forecast/daily';
urlImg = 'https://www.bing.com/HPImageArchive.aspx?resolution=1920&format=js&idx=0&n=1&mkt=pt-BR';
apikey = '9de243494c0b295cca9337e1e96b00e2';
lang = 'pt_br';
cnt = '3';
  constructor(private http: HttpClient) { }


getWeatherDataByCoords(lat, lon){
  let params = new HttpParams()
  .set('lat', lat)
  .set('lon', lon)
  .set('cnt', this.cnt)
  .set('units', 'metric')
  .set('appid', this.apikey)
  .set('lang', this.lang)

  return this.http.get(this.url, {params});
}

getWeatherByCity(city: string){
  let params = new HttpParams()
  .set('q', city)
  .set('units', 'metric')
  .set('cnt', this.cnt)
  .set('appid', this.apikey)
  .set('lang', this.lang);
  return this.http.get(this.url, {params});
}

getImageBing(){
  let headers = new HttpHeaders()
  // .set('Ocp-Apim-Subscription-Key:', '123456789ABCDE')
  // .set('X-MSEdge-ClientIP','999.999.999.999')
  // .set('X-Search-Location','lat:47.60357;long:-122.3295;re:100')
  // .set('Host','api.cognitive.microsoft.com');
  return this.http.get(this.urlImg, {headers});
}
}
