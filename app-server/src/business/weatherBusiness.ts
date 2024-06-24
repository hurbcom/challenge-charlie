import fetch from 'node-fetch';
import config from '../config/config';
import { IWeatherForecast } from '../interfaces/weatherForecast.interface';
import {
    convertAngleToCardinalDirections,
    convertKelvinToCelsius,
    convertMeterPerSecondToKilometerPerHour,
    convertKelvinToFahrenheit
} from '../utils/convertions'

class BackgroundBusiness {
    //Function responsible for returning today's weather and the forecast for the next two days from the API based on a provided city.
    async getWeatherForecastForTodayAndNextTwoDays(cidade: string) {
        try {
            const response = await fetch(
                config.OPEN_WEATHER_API
                + '/data/2.5/forecast?q=' + cidade + '&appid=' + config.OPEN_WEATHER_API_KEY);
            const data = await response.json();

            // Check if the city/town exists.
            if (data.cod !== '200') {
                throw new Error("City not found");
            }

            return this.filterWeatherForecast(data.list)
        } catch (error) {
            throw new Error('Failed to fetch weather forecast');
        }
    }

    // Function responsible for transforming the OpenWeather API response into the JSON format used in the application,
    // using the specified paths as per the API response format. Data requiring processing is handled in their respective functions.
    filterWeatherForecast(list: any): IWeatherForecast {
        return {
            temperature: {
                fahrenheit: convertKelvinToFahrenheit(list[0].main.temp),
                celsius: convertKelvinToCelsius(list[0].main.temp)
            },
            humidity: list[0].main.humidity,
            pressure: list[0].main.pressure,
            weather: list[0].weather[0].main,
            weatherIcon: this.getIconId(list[0].weather[0].icon),
            windSpeed: convertMeterPerSecondToKilometerPerHour(list[0].wind.speed),
            windDirection: convertAngleToCardinalDirections(list[0].wind.deg),
            tomorowTemperature: {
                fahrenheit: convertKelvinToFahrenheit(list[1].main.temp),
                celsius: convertKelvinToCelsius(list[1].main.temp)
            },
            afterTomorrowTemperature: {
                fahrenheit: convertKelvinToFahrenheit(list[2].main.temp),
                celsius: convertKelvinToCelsius(list[2].main.temp)
            }
        }
    }

    //Function that relates the icons provided by open weather to the meteocons icons
    getIconId(openWeatherIcon: string): string {
        const mapIcons: { [key: string]: string } = {
            '01d': '02',
            '01n': '02',
            '02d': '08',
            '02n': '08',
            '03d': '14',
            '03n': '14',
            '04d': '25',
            '04n': '25',
            '09d': '18',
            '09n': '18',
            '10d': '17',
            '10n': '17',
            '11d': '27',
            '11n': '27',
            '13d': '23',
            '13n': '23',
            '50d': '13',
            '50n': '13'
        }
        return mapIcons[openWeatherIcon]
    }
}

export default BackgroundBusiness;
