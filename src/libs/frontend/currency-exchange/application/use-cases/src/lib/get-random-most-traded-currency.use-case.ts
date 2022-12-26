import {
  GetRandomMostTradedCurrencyIsoCodeUseCaseContract,
  GetRandomMostTradedCurrencyIsoCodeUseCaseInput,
  GetRandomMostTradedCurrencyIsoCodeUseCaseOutput,
} from '@challenge-charlie/frontend/currency-exchange/application/contracts/use-cases';

export class GetRandomMostTradedCurrencyIsoCodeUseCase
  implements GetRandomMostTradedCurrencyIsoCodeUseCaseContract
{
  private _top10MostTradedCurrenciesIsoCodes: string[] = [
    'USD',
    'EUR',
    'JPY',
    'GBP',
    'AUD',
    'CAD',
    'CHF',
    'CNH',
  ];

  public execute(
    input: GetRandomMostTradedCurrencyIsoCodeUseCaseInput
  ): GetRandomMostTradedCurrencyIsoCodeUseCaseOutput {
    const filteredIsoCodes = this._top10MostTradedCurrenciesIsoCodes.filter(
      (p) => p !== input.currentCurrencyIsoCode
    );

    const randomIndex = Math.floor(Math.random() * (filteredIsoCodes.length - 1));
    console.log("🚀 ~ file: get-random-most-traded-currency.use-case.ts:29 ~ randomIndex", randomIndex)

    const randomIsoCode = filteredIsoCodes[randomIndex];

    return {
      randomCurrencyIsoCode: randomIsoCode,
    };
  }
}
