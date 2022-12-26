import { RedisClientType } from '@redis/client';
import { createClient } from 'redis';

type BaseRedisRepositoryConstructorArgs = {
  host: string;
  port: string;
  password: string;
};
export abstract class BaseRedisRepository<TInput, TOutput> {
  protected readonly _client: RedisClientType;

  constructor(args: BaseRedisRepositoryConstructorArgs) {
    console.log("🚀 ~ file: base-redis.repository.ts:13 ~ BaseRedisRepository<TInput, ~ constructor ~ args", args)
    this._client = createClient({
      socket: {
        host: args.host,
        port: parseInt(args.port),
      },
      password: args.password,
    });
  }

  abstract specializedExecute(input: TInput): Promise<TOutput>;

  public async execute(input: TInput): Promise<TOutput> {
    if (!this._client.isOpen) {
      await this._client.connect();
    }

    return this.specializedExecute(input);
  }
}
