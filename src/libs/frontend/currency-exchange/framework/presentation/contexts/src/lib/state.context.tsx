import {
  ExchangeCurrenciesControllerFactory,
  GetCurrenciesControllerFactory,
  GetQuotationControllerFactory,
  GetRandomMostTradedCurrencyIsoCodeControllerFactory,
} from '@challenge-charlie/frontend/currency-exchange/framework/factories/controllers';
import { CustomerLocationChangedEventListenerControllerOutput } from '@challenge-charlie/frontend/custom-events/adapter/contracts';
import { CustomerLocationChangedEventListenerController } from '@challenge-charlie/frontend/custom-events/adapter/controllers';
import { Currency } from '@challenge-charlie/frontend/currency-exchange/enterprise/entities';
import React, { ChangeEvent, useEffect, useState } from 'react';

export type StateContextContract = {
  currentCurrency?: Currency;
  currencies: Currency[];

  selectedFromCurrency: string;
  selectFromCurrency: (event: ChangeEvent<HTMLSelectElement>) => void;

  selectedToCurrency: string;
  selectToCurrency: (event: ChangeEvent<HTMLSelectElement>) => void;

  selectedFromCurrencyAmount: string;
  selectedFromCurrencyAmountChanged: (
    event: ChangeEvent<HTMLInputElement>
  ) => void;

  selectedToCurrencyAmount: string;
  selectedToCurrencyAmountChanged: (
    event: ChangeEvent<HTMLInputElement>
  ) => void;

  quotation: string;
};

const initialValue: StateContextContract = {
  currencies: [],
  selectedFromCurrency: '',
  selectedToCurrency: '',
  selectedFromCurrencyAmount: '',
  selectedToCurrencyAmount: '',
  quotation: '',
  selectFromCurrency: function (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void {
    throw new Error('Function not implemented.');
  },
  selectToCurrency: function (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void {
    throw new Error('Function not implemented.');
  },
  selectedFromCurrencyAmountChanged: function (
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    throw new Error('Function not implemented.');
  },
  selectedToCurrencyAmountChanged: function (
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    throw new Error('Function not implemented.');
  },
};

export const StateContext =
  React.createContext<StateContextContract>(initialValue);

export type StateContextProviderProps = {
  children: JSX.Element;
};

const getCurrenciesController = GetCurrenciesControllerFactory.execute();
const getQuotationController = GetQuotationControllerFactory.execute();
const exchangeCurrenciesController =
  ExchangeCurrenciesControllerFactory.execute();
const getRandomMostTradedCurrencyController = GetRandomMostTradedCurrencyIsoCodeControllerFactory.execute()

export function StateContextProvider({ children }: StateContextProviderProps) {
  const [currentCurrency, setCurrentCurrency] = useState<Currency>();
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  const [selectedFromCurrency, setSelectedFromCurrency] = useState('');
  const [selectedToCurrency, setSelectedToCurrency] = useState('');

  const [selectedFromCurrencyAmount, setSelectedFromCurrencyAmount] =
    useState('1.00');
  const [selectedToCurrencyAmount, setSelectedToCurrencyAmount] =
    useState('0.00');

  const [quotation, setQuotation] = useState('');

  async function getQuotation(from: string, to: string) {
    const { quotation } = await getQuotationController.execute({
      from,
      to,
    });

    setQuotation(quotation);

    const { amountExchanged } = exchangeCurrenciesController.execute({
      amount: selectedFromCurrencyAmount,
      quotation: {
        currency: from,
        value: quotation,
      },
      from: {
        currency: from,
      },
      to: {
        currency: to,
      },
    });

    setSelectedToCurrencyAmount(amountExchanged);
  }

  const controller = new CustomerLocationChangedEventListenerController();

  controller.execute({
    listener: customerLocationChangedEventListener,
  });

  async function customerLocationChangedEventListener(
    output: CustomerLocationChangedEventListenerControllerOutput
  ) {
    if (currencies.length === 0) return

    setCurrentCurrency(output.currency);
    setSelectedFromCurrency(output.currency.isoCode);

    const { randomCurrencyIsoCode } = getRandomMostTradedCurrencyController.execute({
      currentCurrencyIsoCode: output.currency.isoCode
    });
    
    setSelectedToCurrency(randomCurrencyIsoCode);

    await getQuotation(output.currency.isoCode, randomCurrencyIsoCode);
  }

  useEffect(() => {
    async function getCurrencies() {
      const { currencies } = await getCurrenciesController.execute();

      setCurrencies(currencies);

      setSelectedFromCurrency('BRL');
      setSelectedToCurrency('USD');

      await getQuotation('BRL', 'USD');
    }

    getCurrencies();
  }, []);

  async function selectFromCurrency(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedFromCurrency(event.target.value);
    getQuotation(event.target.value, selectedToCurrency);
  }

  async function selectToCurrency(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedToCurrency(event.target.value);
    getQuotation(selectedFromCurrency, event.target.value);
  }

  function selectedFromCurrencyAmountChanged(
    event: ChangeEvent<HTMLInputElement>
  ) {
    const { amountExchanged } = exchangeCurrenciesController.execute({
      amount: event.target.value,
      quotation: {
        currency: selectedFromCurrency,
        value: quotation,
      },
      from: {
        currency: selectedFromCurrency,
      },
      to: {
        currency: selectedToCurrency,
      },
    });

    setSelectedFromCurrencyAmount(event.target.value);
    setSelectedToCurrencyAmount(amountExchanged);
  }

  function selectedToCurrencyAmountChanged(
    event: ChangeEvent<HTMLInputElement>
  ) {
    const { amountExchanged } = exchangeCurrenciesController.execute({
      amount: event.target.value,
      quotation: {
        currency: selectedToCurrency,
        value: quotation,
      },
      from: {
        currency: selectedFromCurrency,
      },
      to: {
        currency: selectedToCurrency,
      },
    });

    setSelectedToCurrencyAmount(event.target.value);
    setSelectedFromCurrencyAmount(amountExchanged);
  }

  return (
    <StateContext.Provider
      value={{
        currentCurrency,
        currencies,
        selectedFromCurrency,
        selectedToCurrency,
        selectedFromCurrencyAmount,
        selectedToCurrencyAmount,
        quotation,
        selectFromCurrency,
        selectToCurrency,
        selectedFromCurrencyAmountChanged,
        selectedToCurrencyAmountChanged,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
