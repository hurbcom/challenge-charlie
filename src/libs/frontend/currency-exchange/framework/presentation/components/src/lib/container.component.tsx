import { StateContextProvider } from '@challenge-charlie/frontend/currency-exchange/framework/presentation/contexts';
import { CurrencyExchangeOverviewComponent } from './currency-exchange-overview/currency-exchange-overview.component';

export function ContainerComponent() {
  return (
    <StateContextProvider>
      <CurrencyExchangeOverviewComponent />
    </StateContextProvider>
  );
}
