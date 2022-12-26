import {
  GetQuotationControllerContract,
  GetQuotationControllerInput,
  GetQuotationControllerOutput,
} from '@challenge-charlie/frontend/currency-exchange/adapter/contracts/controllers';
import { GetQuotationRepositoryContract } from '@challenge-charlie/frontend/currency-exchange/application/contracts/repositories';

export class GetQuotationController implements GetQuotationControllerContract {
    constructor(
        private readonly getQuotationRepository: GetQuotationRepositoryContract,
    ) {}

  public async execute(
    { from, to }: GetQuotationControllerInput
  ): Promise<GetQuotationControllerOutput> {
    const { quotation } = await this.getQuotationRepository.execute({
        from,
        to,
    });

    return {
        quotation,
    }
  }
}
