import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle, theme } from './styles';
import { ThemeProvider } from 'styled-components';
import { AppContainer } from './components/AppContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer />
    </ThemeProvider>
  </React.StrictMode>,
);
