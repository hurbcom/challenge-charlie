import {
  CustomerLocationChangedEventListenerControllerInput,
  CustomerLocationChangedEventListenerControllerContract,
  CustomerLocationChangedEventListenerControllerOutput,
} from '@challenge-charlie/frontend/custom-events/adapter/contracts';
import { CustomerLocationChangedEventEmitterController } from './customer-location-changed-event-emitter.controller';

export class CustomerLocationChangedEventListenerController
  implements CustomerLocationChangedEventListenerControllerContract
{
  public execute(
    input: CustomerLocationChangedEventListenerControllerInput
  ): void {
    window.document.addEventListener(
      CustomerLocationChangedEventEmitterController.EVENT,
      (
        event: Event
      ) => {
        input.listener({
          currency: (event as any).detail.currency,
        });
      }
    );
  }
}
