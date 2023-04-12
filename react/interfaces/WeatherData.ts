export interface WeatherData {
    day: string;
    weather: { icon: string; description: string };
    main: { temp: number; pressure: number; humidity: number };
    wind: { speed: number; deg: number };
}
