import {
  GetCurrencyQuotationControllerContract,
  GetCurrencyQuotationControllerInput,
  GetCurrencyQuotationControllerOutput,
} from '@challenge-charlie/backend/currency-exchange/adapter/contracts/controllers';
import { GetCurrencyQuotationUseCaseContract } from '@challenge-charlie/backend/currency-exchange/application/contracts/use-cases';

export class GetCurrencyQuotationController
  implements GetCurrencyQuotationControllerContract
{
  constructor(
    private readonly getCurrencyQuotationUseCase: GetCurrencyQuotationUseCaseContract
  ) {}

  public async execute({
    from,
    to,
  }: GetCurrencyQuotationControllerInput): Promise<GetCurrencyQuotationControllerOutput> {
    const { quotation } = await this.getCurrencyQuotationUseCase.execute({
      from,
      to,
    });

    return {
      quotation,
    };
  }
}
