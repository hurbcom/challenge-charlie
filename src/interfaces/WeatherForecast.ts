interface CurrentWeatherData {
    id: number;
    name: string;
    cod: number;
    coord: Coordinates;
    weather: Weather[];
    base: string;
    main: TemperatureCurrent;
    wind: Wind;
}
interface Coordinates {
    lon: number;
    lat: number;
}

interface TemperatureCurrent {
    temp: number;
    pressure: number;
    humidity: number;
}
interface Wind {
    speed: number;
}

interface NextWeatherData {
    lat: number;
    lon: number;
    timezone: string;
    daily: DailyForecast[];
}

interface DailyForecast {
    dt: Number;
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
