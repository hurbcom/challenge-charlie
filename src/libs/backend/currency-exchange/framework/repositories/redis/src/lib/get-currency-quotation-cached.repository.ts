import {
  GetCurrencyQuotationRepositoryContract,
  GetCurrencyQuotationRepositoryInput,
  GetCurrencyQuotationRepositoryOutput,
} from '@challenge-charlie/backend/currency-exchange/application/contracts/repositories';
import { BaseRedisRepository } from '@challenge-charlie/backend/redis';

export class GetCurrencyQuotationCachedRepository
  extends BaseRedisRepository<GetCurrencyQuotationRepositoryInput, GetCurrencyQuotationRepositoryOutput>
  implements GetCurrencyQuotationRepositoryContract
{
  constructor(
    private readonly getCurrencyQuotationRepository: GetCurrencyQuotationRepositoryContract
  ) {
    super({
      host: process.env.REDIS_QUOTATION_HOST,
      port: process.env.REDIS_QUOTATION_PORT,
      password: process.env.REDIS_PASSWORD,
    });
  }

  public async specializedExecute({
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
