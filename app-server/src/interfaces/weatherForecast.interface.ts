export interface IWeatherForecast {
    temperature: ITemperature,
    weather: string,
    weatherIcon: string,
    windSpeed: number,
    windDirection: string,
    humidity: number,
    pressure: number,
    tomorowTemperature: ITemperature
    afterTomorrowTemperature: ITemperature
}

interface ITemperature {
    celsius: number,
    fahrenheit: number
}