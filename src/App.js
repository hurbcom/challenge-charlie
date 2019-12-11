import React from 'react';
/* import { Provider, useSelector } from 'react-redux'; */
import { Provider } from 'react-redux';
import store from './store';
import './config/ReactotronConfig';
import GlobalStyles from './styles/GlobalStyles';
import Main from './pages/Main';

function App() {
  /* const background = useSelector(state => state.main); */

  return (
    <Provider store={store}>
      {/* <GlobalStyles background={background} /> */}
      <GlobalStyles background="" />
      <Main />
    </Provider>
  );
}

export default App;
