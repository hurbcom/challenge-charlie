import React from 'react';
import { AppContainer } from './components/app-container';
import { Background } from './components/background';
import GlobalStyles from './styles/GlobalStyles';

export function App() {
  return (
    <>
      <Background>
        <AppContainer />
      </Background>
      <GlobalStyles />
    </>
  );
}
