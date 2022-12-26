import { GetCurrencyQuotationRepositoryContract } from "@challenge-charlie/backend/currency-exchange/application/contracts/repositories";
import { GetCurrencyQuotationUseCaseContract, GetCurrencyQuotationUseCaseInput, GetCurrencyQuotationUseCaseOutput } from "@challenge-charlie/backend/currency-exchange/application/contracts/use-cases";

export class GetCurrencyQuotationUseCase implements GetCurrencyQuotationUseCaseContract {
  constructor(private readonly getCurrencyQuotationRepository: GetCurrencyQuotationRepositoryContract) { }

  public async execute(input: GetCurrencyQuotationUseCaseInput): Promise<GetCurrencyQuotationUseCaseOutput> {
    const { quotes } = await this.getCurrencyQuotationRepository.execute({
      isoCode: input.from
    });

    const quotation = Number.parseFloat(quotes[input.to]).toFixed(2);

    return {
      quotation,
    };
  }
}
