import type {
    CurrentWeatherData,
    NextWeatherData,
} from '../interfaces/WeatherForecast';

const URL_CURRENT_WEATHER =
    'http://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=af823b7941d4124fbde8ea90f9e0a3b6&lang=pt_br&units=metric';

export const getCurrentWeatherForecast = async (): Promise<
    CurrentWeatherData | undefined
> => {
    try {
        const response = await fetch(URL_CURRENT_WEATHER);
        const currentWeather = await response.json();
        return currentWeather;
    } catch (error) {
        console.error(error);
        return undefined;
    }
};

const URL_NEXT_WEATHER =
    'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely,alerts&appid=af823b7941d4124fbde8ea90f9e0a3b6&lang=pt_br&units=metric';

export const getNextWeatherForecast = async (): Promise<
    NextWeatherData | undefined
> => {
    try {
        const response = await fetch(URL_NEXT_WEATHER);
        const nextWeatherForecast = await response.json();
        return nextWeatherForecast;
    } catch (error) {
        console.error(error);
        return undefined;
    }
};
