import {
  GetCurrencyQuotationRepositoryContract,
  GetCurrencyQuotationRepositoryInput,
  GetCurrencyQuotationRepositoryOutput,
} from '@challenge-charlie/backend/currency-exchange/application/contracts/repositories';
import { createClient } from '@redis/client';
import { RedisClientType } from 'redis';

export class GetCurrencyQuotationCachedRepository
  implements GetCurrencyQuotationRepositoryContract
{
  private readonly _client: RedisClientType;

  constructor(
    private readonly getCurrencyQuotationRepository: GetCurrencyQuotationRepositoryContract
  ) {
    this._client = createClient({
      url: process.env.QUOTATION_CACHE_URL,
    });
  }

  public async execute({
    isoCode,
  }: GetCurrencyQuotationRepositoryInput): Promise<GetCurrencyQuotationRepositoryOutput> {
    if (!this._client.isOpen) {
      await this._client.connect();
    }

    const cached = await this._client.get(isoCode);

    if (cached) {
      const quotes = JSON.parse(cached);
      return {
        quotes,
      };
    }

    const { quotes } = await this.getCurrencyQuotationRepository.execute({
      isoCode,
    });

    await this._client.set(isoCode, JSON.stringify(quotes));

    return {
      quotes,
    };
  }
}
