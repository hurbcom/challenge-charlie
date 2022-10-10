import * as axios from 'axios';
import { OpenWeather5DayCast } from './OpenWeather5DayCastResponse';
import { OpenWeatherCurrentCast } from './OpenWeatherCurrentCastResponse';
import { OpenWeatherDirectGeocodingResponses } from './OpenWeatherDirectGeocodingResponse';
import { OpenWeatherReverseGeocodingResponses } from './OpenWeatherReverseGeocodingResponse';

export class OpenWeatherApi
{
    constructor()
    {}

    static factory()
    {
        return new OpenWeatherApi();
    }

    async getCurrentWeather(city: string, lang='pt') : Promise<OpenWeatherCurrentCast>
    {
        const _res =  await axios.default.get(`/data/2.5/weather?q=${city}&lang=${lang}`);
        return _res.data;
    }

    async getCurrentWeatherByGeolocation(lat: number, lon: number, lang='pt') : Promise<OpenWeatherDirectGeocodingResponses>
    {
        const _res =  await axios.default.get(`/data/2.5/weather?lat=${lat}&lon=${lon}&lang=${lang}`);
        return _res.data;
    }
  
    async get5DayForecast(city: string, lang='pt') : Promise<OpenWeather5DayCast>
    {
        const _res =  await axios.default.get(`/data/2.5/forecast?q=${city}&lang=${lang}`);
        return _res.data;
    }

    async getDirectGeocoding(qcity: string, limit=20) : Promise<OpenWeatherDirectGeocodingResponses>
    {
        const _res =  await axios.default.get(`/geo/1.0/direct?q=${qcity}&limit=${limit}`);
        return _res.data;
    }
  
    async getReverseGeocoding(lat: number, lon: number, limit=20) : Promise<OpenWeatherReverseGeocodingResponses>
    {
        const _res =  await axios.default.get(`/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=${limit}`);
        return _res.data;
    }
  
}