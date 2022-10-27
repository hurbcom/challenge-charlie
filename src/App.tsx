import { Background } from './components/Background';
import { Home } from './pages/Home';

import { GlobalStyle } from './styles/global';
import "./assets/fonts/stylesheet.css"
import { LoadingContextProvider } from './context/LoadingContext';
function App() {


  return (
    <LoadingContextProvider>
      <Background>
        <Home />
        <GlobalStyle />
      </Background>
    </LoadingContextProvider>
  );
}

export default App;
