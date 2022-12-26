import { GetCurrenciesRepositoryContract, GetCurrenciesRepositoryOutput } from '@challenge-charlie/backend/currency-exchange/application/contracts/repositories';
import { createClient, RedisClientType } from 'redis';

export class GetCurrenciesCachedRepository implements GetCurrenciesRepositoryContract {
  private readonly _key = 'currencies';
  private readonly _client: RedisClientType;

  constructor(
    private readonly getCurrenciesRepository: GetCurrenciesRepositoryContract
  ) {
    this._client = createClient({
      socket: {
        host: process.env.REDIS_CURRENCIES_HOST,
        port: parseInt(process.env.REDIS_CURRENCIES_PORT),
      },
      password: process.env.REDIS_PASSWORD,
    });
  }

  public async execute(): Promise<GetCurrenciesRepositoryOutput> {
    if (!this._client.isOpen) {
      await this._client.connect();
    }

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
