import { Component, OnInit } from '@angular/core';
import { LocalWeather } from 'src/app/models/localWeather';
import { WeatherService } from 'src/app/services/weather.service';
import { Utils } from 'src/app/utils/utils';
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit
{
	public unit: string
	public KELVIN: number;
	public imgUrl: string;
	public nowTime: string;
	public iconUrl: string;
	public localName: string;
	public container: number;
	public searchName: string;
	public weatherIcon: string;
	public selectedItem: number;
	public callingResponse: boolean;
	public invalidSearchLocation: boolean;
	public weatherList: Array<LocalWeather>;
	public todayWeather: LocalWeather = new LocalWeather();

	public utils = Utils;

	constructor(private weatherService: WeatherService)
	{
		this.KELVIN = 273;
		this.container = 1;
		this.selectedItem = 1;
		this.imgUrl = "../../../assets/imgs/rain.png";
	}

	ngOnInit(): void
	{
		this.unit = this.utils.CELCIUS;
		this.callingResponse = true;
		this.getLocation();
;	}

	public changeUnit()
	{
		if(this.unit == this.utils.CELCIUS)
		{
			this.unit = this.utils.FAHRENHEIT;
		}
		else
		{
			this.unit = this.utils.CELCIUS;
		}
		this.searchName = this.localName;
		this.getWeather();
	}

	public getWeather()
	{
		if(this.searchName !== "")
		{
			this.callingResponse = true;
			this.weatherService.getWeather(this.searchName, this.unit).subscribe(
				(res: any) =>
				{
					setTimeout(() => {
						this.callingResponse = false;
						this.setWeatherData(res);
						this.invalidSearchLocation = false;
					}, 1000);
				},
				()=>
				{
					setTimeout(() => {
						this.callingResponse = false;
						this.invalidSearchLocation = true;
						this.searchName = "";
					}, 1000);
				}
			);
		}
	}

	public getWeatherByLatLong(lat: any, long: any, unit: string)
	{
		this.callingResponse = true;
		this.weatherService
		.getWeatherByLatLong(lat, long, unit)
		.subscribe(
			(res: any) =>
			{
				setTimeout(() => {
					this.callingResponse = false;
					this.invalidSearchLocation = false;
					this.setWeatherData(res);
				}, 1000);
			},
			(error: any)=>
			{
				setTimeout(() => {
					this.callingResponse = false;
					this.invalidSearchLocation = false;
					this.searchName = "";
				}, 1000);
			}
		);
	}

	public setWeatherListIcons(list: any)
	{
		list.forEach((weather: any) => {
			weather.time = this.utils.formatTime(weather.dt_txt);
			this.getWeatherIcon(weather.weather[0].icon + "@2x.png");
			setTimeout(() => {
				weather.icon = this.iconUrl;
			}, 0);
		});
	}

	public setTodayWeatherData(todayData: any)
	{
		this.todayWeather = 
			{
				icon: this.iconUrl,
				time: todayData.dt_txt,
				wind: todayData.wind.speed,
				visibility: todayData.visibility,
				humidity: todayData.main.humidity,
				pressure: todayData.main.pressure,
				seaLevel: todayData.main.sea_level,
				description: todayData.weather[0].description,
				max: this.utils.roundWeather(todayData.main.temp_max),
				min: this.utils.roundWeather(todayData.main.temp_min),
				temperature: this.utils.roundWeather(todayData.main.temp),
				feelsLike: this.utils.roundWeather(todayData.main.feels_like),
			}
	}

	public setWeatherData(response: any)
	{
		this.searchName = "";
		this.localName = response.city.name;
		this.weatherList = response.list;
		let today: any = this.weatherList[0];
		this.nowTime = this.utils.formatTime(today.dt_txt);
		let iconCode = today.weather[0].icon + "@2x.png";
		this.imgUrl = this.utils.setBackgroundImage(today.weather[0].main);

		this.setWeatherListIcons(this.weatherList);
		this.getWeatherIcon(iconCode);

		
		setTimeout(() =>
		{
			this.setTodayWeatherData(today);
			let temp = parseInt(this.todayWeather.temperature);
			this.utils.setBackgroundColor(temp, this.unit);
		}, 0);

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
				let latitude = position.coords.latitude;
				let longitude = position.coords.longitude;
				this.getWeatherByLatLong(latitude, longitude, this.unit);
			});
		}
	}

	public getWeatherIcon(iconCode: string)
	{
		this.weatherService.getWeatherIcon(iconCode).subscribe(
			(res: any)=>
			{
				this.iconUrl = res.url;
			}
		);
	}
}
