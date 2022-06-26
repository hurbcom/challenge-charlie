import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppContainer } from './components';
import { GlobalStyle } from './styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { WeatherDataProvider } from './contexts/AppDataContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WeatherDataProvider>
        <GlobalStyle />
        <AppContainer />
      </WeatherDataProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
