import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppContainer } from './components';
import { GlobalStyle, theme } from './styles';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { WeatherDataProvider } from './contexts/AppDataProvider';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WeatherDataProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <AppContainer />
        </ThemeProvider>
      </WeatherDataProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
