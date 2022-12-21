import { GetCustomerLocationByAddressControllerContract, GetCustomerLocationByAddressControllerInput, GetCustomerLocationByAddressControllerOutput } from "@challenge-charlie/frontend/weather-forecast/adapter/contracts/controllers";
import { GetCustomerLocationByAddressUseCaseContract } from "@challenge-charlie/frontend/weather-forecast/application/contracts/use-cases";

export class GetCustomerLocationByAddressController implements GetCustomerLocationByAddressControllerContract {
    constructor(
        private readonly geCustomertLocationByAddressUseCase: GetCustomerLocationByAddressUseCaseContract
    ) {}
    
    public async execute(input: GetCustomerLocationByAddressControllerInput): Promise<GetCustomerLocationByAddressControllerOutput> {
        const { location } = await this.geCustomertLocationByAddressUseCase.execute({
            address: input.address
        })

        return {
            location,
        }
    }

}