
export type CustomerLocationChangedEventListenerControllerInput = {
    listener: (output: CustomerLocationChangedEventListenerControllerOutput) => void
}

export type CustomerLocationChangedEventListenerControllerOutput = {
    currency: {
        name: string
        isoCode: string
    }
}

export type CustomerLocationChangedEventListenerControllerContract = {
    execute(input: CustomerLocationChangedEventListenerControllerInput): void
}
