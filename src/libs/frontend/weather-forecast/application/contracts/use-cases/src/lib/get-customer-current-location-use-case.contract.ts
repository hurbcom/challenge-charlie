import { LocationOverview } from "@challenge-charlie/frontend/weather-forecast/enterprise/entities"

export type GetCustomerCurrentLocationUseCaseOutput = {
    location: LocationOverview
}

export type GetCustomerCurrentLocationUseCaseContract = {
    execute(): Promise<GetCustomerCurrentLocationUseCaseOutput>
}
