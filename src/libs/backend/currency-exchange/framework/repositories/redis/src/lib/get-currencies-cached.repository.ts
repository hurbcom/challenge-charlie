import { GetCurrenciesRepositoryContract, GetCurrenciesRepositoryOutput } from '@challenge-charlie/backend/currency-exchange/application/contracts/repositories';
import { BaseRedisRepository } from '@challenge-charlie/backend/redis';

export class GetCurrenciesCachedRepository
extends BaseRedisRepository<void, GetCurrenciesRepositoryOutput>
implements GetCurrenciesRepositoryContract {
  private readonly _key = 'currencies';

  constructor(
    private readonly getCurrenciesRepository: GetCurrenciesRepositoryContract
  ) {
    super({
      host: process.env.REDIS_CURRENCIES_HOST,
      port: process.env.REDIS_CURRENCIES_PORT,
      password: process.env.REDIS_PASSWORD,
    });
  }

  public async specializedExecute(): Promise<GetCurrenciesRepositoryOutput> {
    const cached = await this._client.get(this._key);

    let currencies = [];

    if (cached) {
      currencies = JSON.parse(cached);
    } else {
      const output = await this.getCurrenciesRepository.execute();
      currencies = output.currencies;
      await this._client.set(this._key, JSON.stringify(output.currencies));
    }

    return {
      currencies,
    };
  }
}
