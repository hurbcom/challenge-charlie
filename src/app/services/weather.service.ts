import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class WeatherService
{
	baseUrl: string = "http://api.openweathermap.org/data/2.5/forecast?";
	urlByName = "q="
	urlByLat: string = "lat=";
	urlByLong: string = "&lon=";
	urlByUnit: string = "&units="
	weatherApiId: string = "&cnt=4&appid=7ba73e0eb8efe773ed08bfd0627f07b8";
	iconUrl: string = "http://openweathermap.org/img/wn/";

	constructor(private http: HttpClient) { }

	public getWeather(locationName: string, unit: string): any
	{
		let url = this.baseUrl + this.urlByName + locationName + this.urlByUnit + unit + this.weatherApiId;
		return this.http.get(url);
	}
	
	public getWeatherByLatLong(lat: any, long: any, unit: string)
	{
		let url = this.baseUrl + this.urlByLat + lat + this.urlByLong + long + this.urlByUnit + unit + this.weatherApiId;
		return this.http.get(url);
	}

	public getWeatherIcon(iconCode: string)
	{
		let url = this.iconUrl + iconCode;
		return this.http.get(url);
	}
}
