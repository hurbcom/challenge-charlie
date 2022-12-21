import { LocationOverview } from "@challenge-charlie/frontend/weather-forecast/enterprise/entities"

export type GetCustomerLocationByAddressUseCaseInput = {
    address: string
}

export type GetCustomerLocationByAddressUseCaseOutput = {
    location: LocationOverview
}

export type GetCustomerLocationByAddressUseCaseContract = {
    execute(input: GetCustomerLocationByAddressUseCaseInput): Promise<GetCustomerLocationByAddressUseCaseOutput>
}