import { GetRandomMostTradedCurrencyIsoCodeControllerContract, GetRandomMostTradedCurrencyIsoCodeControllerInput, GetRandomMostTradedCurrencyIsoCodeControllerOutput } from "@challenge-charlie/frontend/currency-exchange/adapter/contracts/controllers";
import { GetRandomMostTradedCurrencyIsoCodeUseCaseContract } from "@challenge-charlie/frontend/currency-exchange/application/contracts/use-cases";

export class GetRandomMostTradedCurrencyIsoCodeController implements GetRandomMostTradedCurrencyIsoCodeControllerContract {
    constructor(
        private readonly getRandomMostTradedCurrencyIsoCodeUseCase: GetRandomMostTradedCurrencyIsoCodeUseCaseContract
    ) {}

    public execute(input: GetRandomMostTradedCurrencyIsoCodeControllerInput): GetRandomMostTradedCurrencyIsoCodeControllerOutput {
        const { randomCurrencyIsoCode } = this.getRandomMostTradedCurrencyIsoCodeUseCase.execute({
            currentCurrencyIsoCode: input.currentCurrencyIsoCode
        });

        return {
            randomCurrencyIsoCode
        }
    }

}