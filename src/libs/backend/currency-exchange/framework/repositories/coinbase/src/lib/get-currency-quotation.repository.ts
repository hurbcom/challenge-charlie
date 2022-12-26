import {
  GetCurrencyQuotationRepositoryContract,
  GetCurrencyQuotationRepositoryInput,
  GetCurrencyQuotationRepositoryOutput,
} from '@challenge-charlie/backend/currency-exchange/application/contracts/repositories';

export class GetCurrencyQuotationRepository
  implements GetCurrencyQuotationRepositoryContract
{
  public async execute({
    isoCode,
  }: GetCurrencyQuotationRepositoryInput): Promise<GetCurrencyQuotationRepositoryOutput> {
    const response = await fetch(
      `https://api.coinbase.com/v2/exchange-rates?currency=${isoCode}`
    );

    const { data } = await response.json();

    return {
      quotes: data.rates,
    };
  }
}
