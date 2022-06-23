import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppContainer } from './components';
import { GlobalStyle, theme } from './styles';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppContainer />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
