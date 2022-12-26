import { ExchangeCurrenciesControllerContract, ExchangeCurrenciesControllerInput, ExchangeCurrenciesControllerOutput } from "@challenge-charlie/frontend/currency-exchange/adapter/contracts/controllers";
import { ExchangeCurrenciesUseCaseContract } from "@challenge-charlie/frontend/currency-exchange/application/contracts/use-cases";

export class ExchangeCurrenciesController implements ExchangeCurrenciesControllerContract {
    constructor(
        private readonly exchangeCurrenciesUseCase: ExchangeCurrenciesUseCaseContract,
    ) {}

    public execute(input: ExchangeCurrenciesControllerInput): ExchangeCurrenciesControllerOutput {
        const { quotation } = this.exchangeCurrenciesUseCase.execute(input);

        return {
            amountExchanged: quotation
        };
    }

}