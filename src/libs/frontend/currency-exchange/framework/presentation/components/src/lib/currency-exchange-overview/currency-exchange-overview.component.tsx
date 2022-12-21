import { StateContext } from '@challenge-charlie/frontend/currency-exchange/framework/presentation/contexts';
import { useContext } from 'react';
import { QuoteComponent } from './quote.component';

export function CurrencyExchangeOverviewComponent() {
  const {
    currencies,

    selectedFromCurrency,
    selectedFromCurrencyAmount,
    selectedFromCurrencyAmountChanged,
    selectFromCurrency,

    selectedToCurrency,
    selectedToCurrencyAmount,
    selectedToCurrencyAmountChanged,
    selectToCurrency,
  } = useContext(StateContext);

  return (
    <div className='grid grid-rows-auto'>
      <div className="text-xl text-gray-600 grid grid-cols-[auto_1fr] gap-2 font-bold bg-gray-200 p-2">
        <i className="fa-solid fa-money-bill-transfer grid place-content-center"></i>
        <span>Cotação</span>
      </div>
      <div className="grid grid-rows-auto bg-gray-100 gap-2 p-2">
        <QuoteComponent
          amount={selectedFromCurrencyAmount}
          amountChanged={selectedFromCurrencyAmountChanged}
          currencies={currencies.filter(
            (c: any) => c.id !== selectedToCurrency
          )}
          currency={selectedFromCurrency}
          selectOtherCurrency={selectFromCurrency}
        />
        <QuoteComponent
          amount={selectedToCurrencyAmount}
          amountChanged={selectedToCurrencyAmountChanged}
          currencies={currencies.filter(
            (c: any) => c.id !== selectedFromCurrency
          )}
          currency={selectedToCurrency}
          selectOtherCurrency={selectToCurrency}
        />
      </div>
    </div>
  );
}
