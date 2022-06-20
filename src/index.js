import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './styles/global';
import { AppContainer } from './components/AppContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppContainer />
  </React.StrictMode>,
);
