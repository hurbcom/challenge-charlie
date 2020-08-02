import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';
import './fontello/css/fontello.css';

const App: React.FC = () => {

  return (
    <>
        {/* here app catches the suspense from page in case translations are not yet loaded */}
        <Suspense fallback="...">
            <BrowserRouter>
                <Routes />

                <GlobalStyle />
            </BrowserRouter>
        </Suspense>
    </>
  );
};

export default App;
