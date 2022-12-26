import {
  ExchangeCurrenciesUseCaseContract,
  ExchangeCurrenciesUseCaseInput,
  ExchangeCurrenciesUseCaseOutput,
} from '@challenge-charlie/frontend/currency-exchange/application/contracts/use-cases';

export class ExchangeCurrenciesUseCase
  implements ExchangeCurrenciesUseCaseContract
{
  public execute(
    input: ExchangeCurrenciesUseCaseInput
  ): ExchangeCurrenciesUseCaseOutput {
    const baseQuotation = Number.parseFloat(input.quotation.value);
    const amount = Number.parseFloat(input.amount);

    let exchangedAmount = 0;

    switch (input.quotation.currency) {
      case input.from.currency:
        exchangedAmount = amount * baseQuotation;
        break;
      case input.to.currency:
        exchangedAmount = amount / baseQuotation;
        break;
      default:
        throw new Error(`Currency ${input.quotation.currency} doesn't match ${input.from.currency} or ${input.to.currency}`);
    }

    if (Number.isNaN(exchangedAmount)) {
      return {
        quotation: '0.0'
      }
    }

    return {
      quotation: exchangedAmount.toFixed(2),
    };
  }
}
