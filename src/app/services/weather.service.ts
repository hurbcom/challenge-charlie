import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class WeatherService {

	constructor(private http: HttpClient) { }

	public getWeather(locationName: string, unit: string): any {
		const url = `http://api.openweathermap.org/data/2.5/forecast?q=
		${locationName}&units=
		${unit}&cnt=17&appid=7ba73e0eb8efe773ed08bfd0627f07b8`;
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
		const url = `http://api.openweathermap.org/data/2.5/forecast?lat=
		${lat}&lon=${long}&units=
		${unit}&cnt=17&appid=7ba73e0eb8efe773ed08bfd0627f07b8`;
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
