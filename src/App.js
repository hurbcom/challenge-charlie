import './App.css';
import Searchweather from './component/SearchWeather';

function App() {
  return (
    <div className="wrapper" style={{ backgroundImage: `url(https://api.serpwow.com/live/search?api_key=demo&engine=google&location=New+York%2CNew+York%2CUnited+States&q=pizza}})` }}>
      <Searchweather/>
    </div>
  );
}

export default App;
