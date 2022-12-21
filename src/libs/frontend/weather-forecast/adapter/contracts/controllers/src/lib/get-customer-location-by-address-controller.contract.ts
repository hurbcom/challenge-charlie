import { LocationOverview } from "@challenge-charlie/frontend/weather-forecast/enterprise/entities"

export type GetCustomerLocationByAddressControllerInput = {
    address: string
}

export type GetCustomerLocationByAddressControllerOutput = {
    location: LocationOverview
}

export type GetCustomerLocationByAddressControllerContract = {
    execute(input: GetCustomerLocationByAddressControllerInput): Promise<GetCustomerLocationByAddressControllerOutput>
}