import React from 'react';
import { Provider } from 'react-redux';
import Store from './store';


function App() {
  return (
    <Provider store={Store}>
      <p>Olá, teste!</p>
    </Provider>
  );
}


export default App;
