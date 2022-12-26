export type WatchGeolocationAvailabilityRepositoryInput = {
    listener: (data: {isGeolocationAvailable: boolean}) => void
}

export type WatchGeolocationAvailabilityRepositoryOutput = {
    subscription: () => {
        unsubscribe: () => void
    }
}

export type  WatchGeolocationAvailabilityRepositoryContract = {
    execute(input: WatchGeolocationAvailabilityRepositoryInput): WatchGeolocationAvailabilityRepositoryOutput
}
