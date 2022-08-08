import axios from "axios";
import { IForecastData } from "../models/forecastData";
import { IGeolocationFromBrowser } from "../models/geolocationFromBrowser";
import { IWeather } from "../models/weatherData";

export class GeolocationService {
    //Function to get the current location of the user from the browser
    public static getUserLocation = async () => {
        try {
            const geolocation = new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition((pos) =>
                    //If the user allows the location, the position is returned
                    this.reverseGeocode(
                        pos.coords.latitude,
                        pos.coords.longitude
                    )
                        .then((response) => {
                            resolve(response);
                        })
                        .catch((error) => {
                            console.log(error);
                            reject(error);
                        })
                );
            });
            return geolocation as Promise<IGeolocationFromBrowser>;
        } catch (error) {
            console.log(error);
        }
    };

    //Function to convert latitude and longitude to a named location
    public static reverseGeocode = async (lat: number, lng: number) => {
        try {
            const response = await axios({
                url: `https://api.opencagedata.com/geocode/v1/json?q=${lat},${lng}&key=c63386b4f77e46de817bdf94f552cddf&language=pt_BR`,
                method: "GET",
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    //Function to get current weather data from latitude and longitude
    public static getWeatherFromLatAndLng = async (
        lat: number,
        lng: number
    ) => {
        try {
            const response = await axios({
                url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=772920597e4ec8f00de8d376dfb3f094&lang=pt_BR`,
                method: "GET",
            });
            return response.data as IWeather;
        } catch (error) {
            console.log(error);
        }
    };

    //Function to get current weather data from a named location used for inputted city
    public static getWeatherFromCity = async (city: string) => {
        try {
            const response = await axios({
                url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=772920597e4ec8f00de8d376dfb3f094&lang=pt_BR`,
                method: "GET",
            });
            if (response) {
                return response.data as IWeather;
            }
            return null;
        } catch (error) {
            console.log(error);
        }
    };

    //Function to get forecast weather data from latitude and longitude for the next 2 days
    public static getForecastFromLatAndLng = async (
        lat: number,
        lng: number
    ) => {
        try {
            const response = await axios({
                url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly,alerts&appid=a29cdb9283ab971b4ba908a8aa90601c&lang=pt_br`,
                method: "GET",
            });
            return response.data as IForecastData;
        } catch (error) {
            console.log(error);
        }
    };
}
