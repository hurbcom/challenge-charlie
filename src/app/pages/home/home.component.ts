import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{
	public latitude: any;
	public longitude: any;
	public objectWeather: any;
	public KELVIN: number = 273;
	public localTemperature: string;
	public CELCIUS: string = "Celcius";
	public FAHRENHEIT: string = "Fahrennheit";
	public weatherDescription: string;
	public param: any = {value: 'world'};

	constructor(private weatherService: WeatherService, translate: TranslateService)
	{
		translate.setDefaultLang('en');

		translate.use('pt');
	}

	ngOnInit(): void
	{
		this.getLocation();
		this.getTranslateWeatherDescription();
	}

	public getWeather()
	{
		this.weatherService
		.getWeather(this.objectWeather.name)
		.subscribe(
			(res: any) =>
			{
				this.objectWeather = JSON.parse(res._body)
				console.log("response:", this.objectWeather);
				this.localTemperature = this.convertTemperature(this.objectWeather.main.temp, this.CELCIUS);
			}
		);
	}

	public getWeatherByLatLong(lat: any, long: any)
	{
		this.weatherService.getWeatherByLatLong(lat, long).subscribe(
			(res: any) =>
			{
				this.objectWeather = JSON.parse(res._body)
				this.localTemperature = this.convertTemperature(this.objectWeather.main.temp, this.CELCIUS);
			}
		)
	}

	public convertTemperature(temp: number, tempType: string): string
	{
		let convertTemp: number;
		if(tempType == this.CELCIUS)
		{
			convertTemp = temp - this.KELVIN;
		}
		else
		{
			convertTemp = 1.8 * (temp - 273) + 32;
		}
		return (Math.round(convertTemp * 100) / 100).toFixed(0);
	}

	public getLocation()
	{
		if(!(navigator.geolocation))
		{
			alert("Navegador não suporta geolocalização!");
			return null;
		}
		else
		{
			navigator.geolocation.getCurrentPosition((position)=>
			{
				this.latitude = position.coords.latitude;
				this.longitude = position.coords.longitude;
				this.getWeatherByLatLong(this.latitude, this.longitude);
			});
		}
	}

	public async getTranslateWeatherDescription()
	{
		// const text = await translate("Hello world", "es");
		// console.log(text); // Hola mundo
		// switch(description)
		// {
		// 	case "few clouds":
		// 		this.weatherDescription = "Poucas nuvens";
		// 		break;
		// 	case "broken clouds":
		// 		this.weatherDescription = "Nuvens quebradas";
		// 		break;
		// }
	}
}
