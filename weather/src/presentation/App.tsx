import { QueryClient, QueryClientProvider } from 'react-query';
import { LocationContextProvider } from '../helpers/context/location-context';
import { MainPage } from './pages/MainPage';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();


function App() {

  return (
      <QueryClientProvider client={queryClient}>
        <LocationContextProvider>
            <MainPage />
        </LocationContextProvider>
        <Toaster />
      </QueryClientProvider>
  )
}

export default App
