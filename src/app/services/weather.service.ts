import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class WeatherService {
	baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?';
	urlByName = 'q=';
	urlByLat = 'lat=';
	urlByLong = '&lon=';
	urlByUnit = '&units=';
	weatherApiId = '&cnt=4&appid=7ba73e0eb8efe773ed08bfd0627f07b8';
	iconUrl = 'http://openweathermap.org/img/wn/';

	constructor(private http: HttpClient) { }

	public getWeather(locationName: string, unit: string): any {
		console.log('unidade 1:', unit);
		const url = this.baseUrl + this.urlByName + locationName + this.urlByUnit + unit + this.weatherApiId;
		//passar o retorno para um dto
		try
		{
			const response = this.http.get(url);
			return response;
		}
		catch
		{
			return null;
		}
	}

	public getWeatherByLatLong(lat: any, long: any, unit: string): any {
		const url = this.baseUrl + this.urlByLat + lat + this.urlByLong + long + this.urlByUnit + unit + this.weatherApiId;
		try
		{
			const response = this.http.get(url);
			return response;
		}
		catch
		{
			return null;
		}
	}
}
