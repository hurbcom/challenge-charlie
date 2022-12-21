import { GetCurrenciesControllerContract, GetCurrenciesControllerOutput } from "@challenge-charlie/frontend/currency-exchange/adapter/contracts/controllers";
import { GetCurrenciesRepositoryContract } from "@challenge-charlie/frontend/currency-exchange/application/contracts/repositories";

export class GetCurrenciesController implements GetCurrenciesControllerContract {
    constructor(
        private readonly getCurrenciesRepository: GetCurrenciesRepositoryContract,
    ) {}

    public async execute(): Promise<GetCurrenciesControllerOutput> {
        const { currencies } = await this.getCurrenciesRepository.execute();

        return {
            currencies,
        }
    }
}
