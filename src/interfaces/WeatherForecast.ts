import { Coordinates } from './Coordinates';

interface CurrentWeatherData {
    name: string;
    coord: Coordinates;
    weather: Weather[];
    main: TemperatureCurrent;
    wind: Wind;
}

interface TemperatureCurrent {
    temp: number;
    pressure: number;
    humidity: number;
}
interface Wind {
    speed: number;
    deg: number;
}

interface NextWeatherData {
    lat: number;
    lon: number;
    daily: DailyForecast[];
}

interface DailyForecast {
    temp: Temperatures;
    weather: Weather[];
}

interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface Temperatures {
    day: number;
}

export type { CurrentWeatherData, NextWeatherData, DailyForecast };
