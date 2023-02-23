import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { getBackgroundImageFromBing } from './services/getBackgroundImageFromBing';

const App: React.FC = () => {
  useEffect(() => {
    handleBackgroundImage();
  });

  async function handleBackgroundImage(): string {
    const data = await getBackgroundImageFromBing();

    console.log('data', data);
    return data;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
