import { Currency } from "@challenge-charlie/frontend/weather-forecast/enterprise/entities"

export type CustomerLocationChangedEventEmitterControllerInput = {
    currency: Currency
}

export type CustomerLocationChangedEventEmitterControllerContract = {
    execute(input: CustomerLocationChangedEventEmitterControllerInput): void
}
