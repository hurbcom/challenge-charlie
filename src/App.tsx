import { Background } from './components/Background';
import { Home } from './pages/Home';

import { GlobalStyle } from './styles/global';
import "./assets/fonts/stylesheet.css"

function App() {
  return (
    <Background>
      <Home />
      <GlobalStyle />
    </Background>
  );
}

export default App;
