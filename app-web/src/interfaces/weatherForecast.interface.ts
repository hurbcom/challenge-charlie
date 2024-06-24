export interface IWeatherForecast {
    temperature?: ITemperature,
    weather?: string,
    windSpeed?: number,
    windDirection?: string,
    humidity?: number,
    pressure?: number,
    tomorowTemperature?: ITemperature
    weatherIcon?: string,
    afterTomorrowTemperature?: ITemperature
}

export interface ITemperature {
    celsius: number,
    fahrenheit: number
}