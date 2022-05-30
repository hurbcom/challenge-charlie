import { Home } from './Home';
import { WeatherContextProvider } from './hooks/Weather';
import './style.css';

function App() {
  return (
    <WeatherContextProvider>
      <Home />
    </WeatherContextProvider>
  );
}

export default App;
