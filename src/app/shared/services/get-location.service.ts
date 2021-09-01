import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';


@Injectable({
    providedIn : 'root'
})

export class LocationService {
    constructor() {
        this.apiLocation = environment.API_LOCATION;
    }

    apiLocation!: string


    /**
	 * Given a location, fetches an API to collect and return its latitude and longitude.
	 */
    async getForwardLocation(cityName: string){
        try {
            const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=${this.apiLocation}`),

                data = await response.json();

            return data;
        } catch (error) {
            console.log(error);
        }
    }

    /**
	 * Given a latitude and longitude, fetches an API to collect and return its location.
	 */
    async getReverseLocation(initLat: number, initLon: number){
        try {
            const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${initLat}+${initLon}&key=${this.apiLocation}`),

                data = await response.json();

            return data;
        } catch (error) {
            console.error(error);
        }
    }

}
