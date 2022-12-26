export type WatchGeolocationAvailabilityControllerInput = {
    listener: (data: {isGeolocationAvailable: boolean}) => void
}

export type WatchGeolocationAvailabilityControllerOutput = {
    subscription: () => {
        unsubscribe: () => void
    }
}

export type  WatchGeolocationAvailabilityControllerContract = {
    execute(input: WatchGeolocationAvailabilityControllerInput): void
}
