import {
  WatchGeolocationAvailabilityControllerContract,
  WatchGeolocationAvailabilityControllerInput,
  WatchGeolocationAvailabilityControllerOutput,
} from '@challenge-charlie/frontend/weather-forecast/adapter/contracts/controllers';
import {
    WatchGeolocationAvailabilityRepositoryContract
  } from '@challenge-charlie/frontend/weather-forecast/application/contracts/repositories';

export class WatchGeolocationAvailabilityController
  implements WatchGeolocationAvailabilityControllerContract
{
  constructor(
    private readonly watchGeolocationAvailabilityRespository: WatchGeolocationAvailabilityRepositoryContract
  ) {}

  public execute(input: WatchGeolocationAvailabilityControllerInput): WatchGeolocationAvailabilityControllerOutput {
    const { subscription } = this.watchGeolocationAvailabilityRespository.execute({
        listener: input.listener
    })

    return {
        subscription,
    }
  }
}
