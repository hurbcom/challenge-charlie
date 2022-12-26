import { GetBackgroundImageURLRepositoryContract, GetBackgroundImageURLRepositoryOutput } from "@challenge-charlie/backend/utility/application/contracts/repositories";

export class GetBackgroundImageURLRepository
    implements GetBackgroundImageURLRepositoryContract {
    public async execute(): Promise<GetBackgroundImageURLRepositoryOutput> {
        const response = await fetch(
            'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-US'
        );
        const { images } = await response.json();

        const { url } = images[0];

        return {
            url: `https://www.bing.com${url}`,
        };
    }
}
