import {
  WatchGeolocationAvailabilityRepositoryContract,
  WatchGeolocationAvailabilityRepositoryInput,
  WatchGeolocationAvailabilityRepositoryOutput,
} from '@challenge-charlie/frontend/weather-forecast/application/contracts/repositories';

export class WatchGeolocationAvailabilityRepository
  implements WatchGeolocationAvailabilityRepositoryContract
{
  public execute(input: WatchGeolocationAvailabilityRepositoryInput): WatchGeolocationAvailabilityRepositoryOutput {
    const intervalId = setInterval(() => {
      navigator.geolocation.getCurrentPosition(
        () => {
          input.listener({
            isGeolocationAvailable: true,
          });
        },
        () => {
          input.listener({
            isGeolocationAvailable: false,
          });
        }
      );
    }, 1000);

    return {
        subscription: () => ({
            unsubscribe: () => {
                clearInterval(intervalId)
            }
        })
    }
  }
}
