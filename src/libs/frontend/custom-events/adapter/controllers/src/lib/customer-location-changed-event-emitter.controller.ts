import {
  CustomerLocationChangedEventEmitterControllerInput,
  CustomerLocationChangedEventEmitterControllerContract,
  CustomerLocationChangedEventListenerControllerOutput,
} from '@challenge-charlie/frontend/custom-events/adapter/contracts';

export class CustomerLocationChangedEventEmitterController
  implements CustomerLocationChangedEventEmitterControllerContract
{
  public static readonly EVENT = 'weather-forecast::location::changed';

  public execute(
    input: CustomerLocationChangedEventEmitterControllerInput
  ): void {
    const event =
      new CustomEvent(
        CustomerLocationChangedEventEmitterController.EVENT,
        {
          detail: {
            currency: input.currency,
          },
        }
      );

    window.document.dispatchEvent(event);
  }
}
