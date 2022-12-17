import { LocationOverview } from "@challenge-charlie/frontend/weather-forecast/enterprise/entities"

export type GetLocationDetailsByCoordinatesRepositoryInput = {
    latitude: number
    longitude: number
}

export type GetLocationDetailsByCoordinatesRepositoryOutput = {
    location: LocationOverview
}

export type GetLocationDetailsByCoordinatesRepositoryContract = {
    execute(input: GetLocationDetailsByCoordinatesRepositoryInput): Promise<GetLocationDetailsByCoordinatesRepositoryOutput>
}