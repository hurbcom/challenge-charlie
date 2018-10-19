import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { library as Library } from '@fortawesome/fontawesome-svg-core';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import Store from 'store';
import Theme from 'theme';
import { SearchWeather } from 'components/pages';


Library.add(faCompass);

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
