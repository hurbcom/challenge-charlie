import 'core-js/stable';
import 'regenerator-runtime/runtime';
import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';

import Home from './components/pages/Home';

import { GlobalStyled } from './globalStyle';

ReactDOM.render(
  <GlobalStyled>
    <Reset />
    <Home />
  </GlobalStyled>,
  document.querySelector('#root'),
);
