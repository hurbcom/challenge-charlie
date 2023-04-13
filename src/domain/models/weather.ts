export interface WeatherData {
    current: {
        dt: number;
        sunrise: number;
        sunset: number;
        temp: number;
        feels_like: number;
        pressure: number;
        humidity: number;
        dew_point: number;
        uvi: number;
        clouds: number;
        wind_speed: number;
        wind_deg: number;
        weather: {
            id: number;
            main: string;
            description: string;
            icon: string;
        }[];
    };
    daily: {
        dt: number;
        sunrise: number;
        sunset: number;
        moonrise: number;
        moonset: number;
        moon_phase: number;
        temp: {
            day: number;
            min: number;
            max: number;
            night: number;
            eve: number;
            morn: number;
        };
        pressure: number;
        humidity: number;
        wind_speed: number;
        weather: {
            id: number;
            main: string;
            description: string;
            icon: string;
        }[];
        clouds: number;
        pop: number;
        uvi: number;
        rain?: number;
        snow?: number;
    }[];
}