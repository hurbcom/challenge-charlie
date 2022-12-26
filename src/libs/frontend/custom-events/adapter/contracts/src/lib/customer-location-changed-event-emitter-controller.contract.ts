export type CustomerLocationChangedEventEmitterControllerInput = {
    currency: {
        name: string
        isoCode: string
    }
}

export type CustomerLocationChangedEventEmitterControllerContract = {
    execute(input: CustomerLocationChangedEventEmitterControllerInput): void
}
