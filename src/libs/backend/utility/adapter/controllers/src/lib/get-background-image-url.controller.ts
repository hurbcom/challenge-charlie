import { GetBackgroundImageURLControllerContract, GetBackgroundImageURLControllerOutput } from "@challenge-charlie/backend/utility/adapter/contracts/controllers";
import { GetBackgroundImageURLRepositoryContract } from "@challenge-charlie/backend/utility/application/contracts/repositories";

export class GetBackgroundImageURLController
    implements GetBackgroundImageURLControllerContract {
    constructor(
        private getBackgroundImageURLRepository: GetBackgroundImageURLRepositoryContract
    ) { }

    public async execute(): Promise<GetBackgroundImageURLControllerOutput> {
        const { url } = await this.getBackgroundImageURLRepository.execute();

        return {
            url,
        };
    }
}
