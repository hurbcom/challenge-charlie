import { BaseRedisRepository } from '@challenge-charlie/backend/redis';
import { GetBackgroundImageURLRepositoryContract, GetBackgroundImageURLRepositoryOutput } from '@challenge-charlie/backend/utility/application/contracts/repositories';

export class GetBackgroundImageURLCachedRepository
    extends BaseRedisRepository<void, GetBackgroundImageURLRepositoryOutput>
    implements GetBackgroundImageURLRepositoryContract {
    private readonly _key = 'backgroud_url';

    constructor(
        private readonly getBackgroundImageURLRepository: GetBackgroundImageURLRepositoryContract
    ) {
        super({
            host: process.env.REDIS_BACKGROUND_IMAGE_HOST,
            port: process.env.REDIS_BACKGROUND_IMAGE_PORT,
            password: process.env.REDIS_PASSWORD,
        });
    }

    public async specializedExecute(): Promise<GetBackgroundImageURLRepositoryOutput> {
        const cached = await this._client.get(this._key);

        if (cached) {
            return {
                url: cached,
            };
        }

        const { url } = await this.getBackgroundImageURLRepository.execute();

        await this._client.set(this._key, url);

        return {
            url,
        };
    }
}
