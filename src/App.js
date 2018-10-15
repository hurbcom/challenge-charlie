import React from 'react';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';
import Store from 'store';
import SearchWeather from 'components/container/search-weather';


injectGlobal([`
  ${reset}
  html, body, #root {
    height: 100%;
    width: 100%;
  }
`]);


function App() {
  return (
    <Provider store={Store}>
      <SearchWeather />
    </Provider>
  );
}


export default App;
