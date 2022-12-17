export type GetGeolocationCurrentPositionRepositoryOutput = {
    latitude: number
    longitude: number
}

export type GetGeolocationCurrentPositionRepositoryContract = {
    execute(): Promise<GetGeolocationCurrentPositionRepositoryOutput>
}
