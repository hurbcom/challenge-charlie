import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Store from 'store';
import Theme from 'theme';
import { SearchWeather } from 'components/pages';


function App() {
  return (
    <Provider store={Store}>
      <ThemeProvider theme={Theme}>
        <SearchWeather />
      </ThemeProvider>
    </Provider>
  );
}


export default App;
