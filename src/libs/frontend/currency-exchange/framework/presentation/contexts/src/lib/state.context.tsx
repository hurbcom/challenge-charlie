import {
  GetCurrenciesControllerFactory,
  GetQuotationControllerFactory,
} from '@challenge-charlie/frontend/currency-exchange/framework/factories/controllers';
import { CustomerLocationChangedEventListenerControllerOutput } from '@challenge-charlie/frontend/custom-events/adapter/contracts';
import { CustomerLocationChangedEventListenerController } from '@challenge-charlie/frontend/custom-events/adapter/controllers';
import React, { ChangeEvent, useEffect, useState } from 'react';

export type StateContextContract = {
  currentCurrency: any;
  currencies: any[];

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
  currentCurrency: {},
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

export function StateContextProvider({ children }: StateContextProviderProps) {
  const [currentCurrency, setCurrentCurrency] = useState<any>({});
  const [currencies, setCurrencies] = useState<any>([]);

  const [selectedFromCurrency, setSelectedFromCurrency] = useState('');
  const [selectedToCurrency, setSelectedToCurrency] = useState('');

  const [selectedFromCurrencyAmount, setSelectedFromCurrencyAmount] =
    useState('1.00');
  const [selectedToCurrencyAmount, setSelectedToCurrencyAmount] = useState('0.00');

  const [quotation, setQuotation] = useState('');

  useEffect(() => {
    async function customerLocationChangedEventListener(
      output: CustomerLocationChangedEventListenerControllerOutput
    ) {
      setCurrentCurrency(output.currency);
      setSelectedFromCurrency(output.currency.isoCode);

      const { currencies } = await getCurrenciesController.execute();
      
      setCurrencies(currencies);

      const index = Math.floor((Math.random() * currencies.length) + 1)

      setSelectedToCurrency(currencies[index]['id'])

      await getQuotation(output.currency.isoCode, currencies[index]['id']);

    }

    const controller = new CustomerLocationChangedEventListenerController();
    controller.execute({
      listener: customerLocationChangedEventListener,
    });
  }, []);

  async function getQuotation(from: string, to: string) {
    const { quotation } = await getQuotationController.execute({
      from,
      to,
    });

    setQuotation(quotation);

    const total =
      Number.parseFloat(quotation) *
      Number.parseFloat(selectedFromCurrencyAmount);

    setSelectedToCurrencyAmount(total.toFixed(2));
  }

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
    setSelectedFromCurrencyAmount(event.target.value);
    const l =
      Number.parseFloat(event.target.value) * Number.parseFloat(quotation);

    if (Number.isNaN(l)) {
      setSelectedToCurrencyAmount('');
    } else {
      setSelectedToCurrencyAmount(l.toFixed(2));
    }
  }

  function selectedToCurrencyAmountChanged(
    event: ChangeEvent<HTMLInputElement>
  ) {
    setSelectedToCurrencyAmount(event.target.value);

    const l =
      Number.parseFloat(event.target.value) / Number.parseFloat(quotation);
    console.log(
      '🚀 ~ file: currency-exchange-overview.component.tsx:116 ~ CurrencyExchangeOverviewComponent ~ l',
      l
    );

    if (Number.isNaN(l)) {
      setSelectedFromCurrencyAmount('');
    } else {
      setSelectedFromCurrencyAmount(l.toFixed(2));
    }
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
