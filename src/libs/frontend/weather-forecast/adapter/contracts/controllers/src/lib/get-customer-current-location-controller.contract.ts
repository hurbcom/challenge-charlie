import { LocationOverview } from "@challenge-charlie/frontend/weather-forecast/enterprise/entities";

export type GetCustomerCurrentLocationControllerOutput = {
    location: LocationOverview
}

export type GetCustomerCurrentLocationControllerContract = {
    execute(): Promise<GetCustomerCurrentLocationControllerOutput>;
};
