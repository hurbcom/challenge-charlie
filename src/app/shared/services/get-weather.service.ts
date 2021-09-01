import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';


@Injectable({
    providedIn : 'root'
})

export class WeatherService {
    constructor() {
        this.apiWeather = environment.API_WEATHER;
    }

    // Holds api key
	apiWeather!: string

	async getWeather(lat: number, lon: number) {
	    try {
	        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&units=metric&lang=pt_br&appid=${this.apiWeather}`),
	         data = await response.json();

	        return data;
	    } catch (error) {
	        console.log(error);
	    }
	}

}
