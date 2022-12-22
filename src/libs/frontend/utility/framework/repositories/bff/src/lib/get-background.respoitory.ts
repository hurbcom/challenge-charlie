import {
  GetBackgroundRepositoryContract,
  GetBackgroundRepositoryOutput,
} from '@challenge-charlie/frontend/utility/application/contracts/repositories';
import { environment } from '../environments/environment';

export class GetBackgroundRepository
  implements GetBackgroundRepositoryContract
{
  public async execute(): Promise<GetBackgroundRepositoryOutput> {

    const url = `${environment.bffs.utility.baseUrl}${environment.bffs.utility.endpoints.background}`

    console.log("🚀 ~ file: get-background.respoitory.ts:14 ~ execute ~ url", url)
    const response = await fetch(url);

    const json = await response.json();

    return {
      url: json.data,
    };
  }
}
