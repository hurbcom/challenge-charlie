import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Store from 'store';
import Theme, { GlobalStyle } from 'theme';
import { SearchWeather } from 'components/pages';


function App() {
  return (
    <Provider store={Store}>
      <ThemeProvider theme={Theme}>
        <Fragment>
          <GlobalStyle />
          <SearchWeather />
        </Fragment>
      </ThemeProvider>
    </Provider>
  );
}


export default App;
