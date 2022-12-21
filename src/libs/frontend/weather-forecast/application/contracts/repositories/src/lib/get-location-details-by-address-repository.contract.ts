import { LocationOverview, WeatherForecast } from "@challenge-charlie/frontend/weather-forecast/enterprise/entities";

export type GetLocationDetailsByAddressRepositoryInput = {
    address: string;
}

export type GetLocationDetailsByAddressRepositoryOutput = {
    location: LocationOverview
}

export type GetLocationDetailsByAddressRepositoryContract = {
    execute(input: GetLocationDetailsByAddressRepositoryInput): Promise<GetLocationDetailsByAddressRepositoryOutput>
}
