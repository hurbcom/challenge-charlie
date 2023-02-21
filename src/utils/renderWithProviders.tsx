import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '~/styles/theme/index';

export const renderWithProviders = (children: JSX.Element) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

export default renderWithProviders;
