import { DayForecast } from "./day-forecast";

export type WeatherForecast = {
    today: DayForecast
    tomorrow: DayForecast
    afterTomorrow: DayForecast
}
