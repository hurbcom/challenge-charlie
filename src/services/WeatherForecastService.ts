import type {
    CurrentWeatherData,
    NextWeatherData,
} from '../interfaces/WeatherForecast';

const URL_CURRENT_WEATHER =
    'https://api.openweathermap.org/data/2.5/weather?appid=889ccf4cff9e104cef05b745c7777936&lang=pt_br&units=metric';

export const getCurrentWeatherForecast = async (
    location: string,
): Promise<CurrentWeatherData | undefined> => {
    const response = await fetch(`${URL_CURRENT_WEATHER}&q=${location}`);
    const currentWeather = await response.json();
    console.log(currentWeather);
    if (currentWeather.cod !== 200) return undefined;
    return currentWeather;
};

const URL_NEXT_WEATHER =
    'https://api.openweathermap.org/data/2.5/onecall?exclude=hourly,minutely,alerts&appid=889ccf4cff9e104cef05b745c7777936&lang=pt_br&units=metric';

export const getNextWeatherForecast = async (
    lat: number,
    lon: number,
): Promise<NextWeatherData | undefined> => {
    const response = await fetch(`${URL_NEXT_WEATHER}&lat=${lat}&lon=${lon}`);
    const nextWeatherForecast = await response.json();
    return nextWeatherForecast;
};
