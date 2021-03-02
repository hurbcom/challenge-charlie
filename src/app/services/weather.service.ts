import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
	providedIn: 'root'
})
export class WeatherService
{
	baseUrl: string = "http://api.openweathermap.org/data/2.5/weather?";
	urlByName = "q="
	UrlByLat: string = "lat=";
	UrlByLong: string = "&lon=";
	weatherApiId: string = "&appid=7ba73e0eb8efe773ed08bfd0627f07b8";

	constructor(private http: Http) { }

	public getWeather(locationName: string): any
	{
		let url = this.baseUrl + this.urlByName + locationName + this.weatherApiId;
		return this.http.get(url);
	}
	
	public getWeatherByLatLong(lat: any, long: any)
	{
		let url = this.baseUrl + this.UrlByLat + lat + this.UrlByLong + long + this.weatherApiId;
		return this.http.get(url);
	}
}
