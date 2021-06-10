import type {
    CurrentWeatherData,
    NextWeatherData,
} from '../interfaces/WeatherForecast';

const URL_CURRENT_WEATHER =
    'http://api.openweathermap.org/data/2.5/weather?appid=7ba73e0eb8efe773ed08bfd0627f07b8&lang=pt_br&units=metric';

export const getCurrentWeatherForecast = async (
    location: string,
): Promise<CurrentWeatherData | undefined> => {
    try {
        const response = await fetch(`${URL_CURRENT_WEATHER}&q=${location}`);
        const currentWeather = await response.json();
        return currentWeather;
    } catch (error) {
        console.error(error);
        return undefined;
    }
};

const URL_NEXT_WEATHER =
    'https://api.openweathermap.org/data/2.5/onecall?exclude=hourly,minutely,alerts&appid=7ba73e0eb8efe773ed08bfd0627f07b8&lang=pt_br&units=metric';

export const getNextWeatherForecast = async (
    lat: number,
    lon: number,
): Promise<NextWeatherData | undefined> => {
    try {
        const response = await fetch(
            `${URL_NEXT_WEATHER}&lat=${lat}&lon=${lon}`,
        );
        const nextWeatherForecast = await response.json();
        return nextWeatherForecast;
    } catch (error) {
        console.error(error);
        return undefined;
    }
};
