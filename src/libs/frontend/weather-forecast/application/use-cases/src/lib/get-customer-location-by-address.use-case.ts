import { GetLocationDetailsByAddressRepositoryContract } from "@challenge-charlie/frontend/weather-forecast/application/contracts/repositories";
import { GetCustomerLocationByAddressUseCaseContract, GetCustomerLocationByAddressUseCaseInput, GetCustomerLocationByAddressUseCaseOutput } from "@challenge-charlie/frontend/weather-forecast/application/contracts/use-cases";

export class GetCustomerLocationByAddressUseCase implements GetCustomerLocationByAddressUseCaseContract {

    constructor(
        private readonly getLocationDetailsByAddressRepository: GetLocationDetailsByAddressRepositoryContract
    ) {}

    public async execute(input: GetCustomerLocationByAddressUseCaseInput): Promise<GetCustomerLocationByAddressUseCaseOutput> {
        const { location } = await this.getLocationDetailsByAddressRepository.execute({
            address: input.address
        });

        return {
            location,
        }
    }
}