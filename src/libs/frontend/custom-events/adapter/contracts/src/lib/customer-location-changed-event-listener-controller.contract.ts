import { Currency } from "@challenge-charlie/frontend/weather-forecast/enterprise/entities"

export type CustomerLocationChangedEventListenerControllerInput = {
    listener: (output: CustomerLocationChangedEventListenerControllerOutput) => void
}

export type CustomerLocationChangedEventListenerControllerOutput = {
    currency: Currency
}

export type CustomerLocationChangedEventListenerControllerContract = {
    execute(input: CustomerLocationChangedEventListenerControllerInput): void
}
