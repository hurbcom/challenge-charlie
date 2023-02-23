import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { getBackgroundImageFromBing } from './services/getBackgroundImageFromBing';

const App: React.FC = () => {
  useEffect(() => {
    handleBackgroundImage();
  });

  async function handleBackgroundImage(): any {
    const data = await getBackgroundImageFromBing();

    return data;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
