import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { LocationContextProvider } from '../helpers/context/location-context';
import { MainPage } from './pages/MainPage';

const queryClient = new QueryClient();


function App() {

  return (
      <QueryClientProvider client={queryClient}>
        <LocationContextProvider>
            <MainPage />
        </LocationContextProvider>
      </QueryClientProvider>
  )
}

export default App
