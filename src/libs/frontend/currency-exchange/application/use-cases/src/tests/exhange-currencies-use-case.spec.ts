import { ExchangeCurrenciesUseCaseInput } from '@challenge-charlie/frontend/currency-exchange/application/contracts/use-cases';
import { ExchangeCurrenciesUseCase } from '../lib/exchange-currencies.use-case';

describe('ExchangeCurrenciesUseCase', () => {
  it('should exchange from/to successfully', () => {
    // arrange
    const useCase = new ExchangeCurrenciesUseCase();
    const input: ExchangeCurrenciesUseCaseInput = {
      quotation: {
        currency: 'BRL',
        value: '0.19',
      },
      from: {
        currency: 'BRL',
      },
      to: {
        currency: 'USD',
      },
      amount: '1.00',
    };

    const expectedQuotation = '0.19'

    // act
    const { quotation } = useCase.execute(input);

    // assert
    expect(quotation).toBe(expectedQuotation)
  });

  it('should exchange to/from successfully', () => {
    // arrange
    const useCase = new ExchangeCurrenciesUseCase();
    const input: ExchangeCurrenciesUseCaseInput = {
      quotation: {
        currency: 'BRL',
        value: '0.19',
      },
      from: {
        currency: 'USD',
      },
      to: {
        currency: 'BRL',
      },
      amount: '1.00',
    };

    const expectedQuotation = '5.26'

    // act
    const { quotation } = useCase.execute(input);

    // assert
    expect(quotation).toBe(expectedQuotation)
  });
});
