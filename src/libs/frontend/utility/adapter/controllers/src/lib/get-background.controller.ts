import { GetBackgroundControllerContract, GetBackgroundControllerOutput } from "@challenge-charlie/frontend/utility/adapter/contracts/controllers";
import { GetBackgroundRepositoryContract } from "@challenge-charlie/frontend/utility/application/contracts/repositories";

export class GetBackgroundController implements GetBackgroundControllerContract {
  
  constructor(private readonly getBackgroundRepository: GetBackgroundRepositoryContract) {}
  
  public async execute(): Promise<GetBackgroundControllerOutput> {
    const { url } = await this.getBackgroundRepository.execute();

    return {
      url
    }
  }
  
}