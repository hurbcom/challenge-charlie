import { DayForecast } from "@challenge-charlie/frontend/weather-forecast/enterprise/entities"

export type TemperatureConverterControllerInput = {
    forecast: DayForecast
}

export type TemperatureConverterControllerOutput = {
    forecast: DayForecast
}

export type TemperatureConverterControllerContract = {
    execute(input: TemperatureConverterControllerInput): TemperatureConverterControllerOutput
}
