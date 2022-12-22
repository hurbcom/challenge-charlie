import {
  GetQuotationRepositoryContract,
  GetQuotationRepositoryInput,
  GetQuotationRepositoryOutput,
} from '@challenge-charlie/frontend/currency-exchange/application/contracts/repositories';
import { environment } from '../environments/environment';

export class GetQuotationRepository implements GetQuotationRepositoryContract {
  public async execute({
    from,
    to,
  }: GetQuotationRepositoryInput): Promise<GetQuotationRepositoryOutput> {

    const response = await fetch(
      `${environment.bffs.currencyExchange.baseUrl}${environment.bffs.currencyExchange.endpoints.getQuotation}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from,
          to,
        }),
      }
    );

    const { data } = await response.json();

    return {
      quotation: data,
    };
  }
}
