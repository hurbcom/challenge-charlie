import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => {

  return (
    <>
        <BrowserRouter>
            <Routes />

            <GlobalStyle />
        </BrowserRouter>
    </>
  );
};

export default App;
