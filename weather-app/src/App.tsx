import React from 'react';

import { syncWithLocalStorage } from 'swr-sync-storage';
import { GeolocationProvider } from './hooks/geolocation';
import Main from './pages/Main';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GeolocationProvider>
        <Main />
      </GeolocationProvider>
      <GlobalStyle />
    </>
  );
};

syncWithLocalStorage();

export default App;
