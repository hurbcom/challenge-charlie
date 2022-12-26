import { DayForecast } from "@challenge-charlie/frontend/weather-forecast/enterprise/entities"

export type TemperatureConverterUseCaseInput = {
    forecast: DayForecast
}

export type TemperatureConverterUseCaseOutput = {
    forecast: DayForecast
}

export type TemperatureConverterUseCaseContract = {
    execute(input: TemperatureConverterUseCaseInput): TemperatureConverterUseCaseOutput
}
