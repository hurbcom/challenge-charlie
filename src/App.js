import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/header/header';
import Body from './components/body/body';

function App() {
  const [loc,setLoc] = useState('');
  const [city,setCity] = useState();

  useEffect(() =>{
    const getBackground = async (pos) => {
      await fetch('https://cors-anywhere.herokuapp.com/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR').then(res => res.json())
      .then((data) => {
        document.body.style.background = `#f3f3f3 url(https://www.bing.com/${data.images[0].url}.png) no-repeat`;
      },
    )}
    const getLocation = async (pos) => {
      await fetch('https://api.opencagedata.com/geocode/v1/json?q='+pos.coords.latitude+','+pos.coords.longitude+'&key=c63386b4f77e46de817bdf94f552cddf&language=en').then(res => res.json())
      .then((data) => {
        setCity(data.results[0].components.city);
        setLoc(data.results[0].components.city+ ', ' + data.results[0].components.state);
      },
    )}

    
    getBackground();
    navigator.geolocation.getCurrentPosition(getLocation);
  },[city]);

  return (
    <div className="App">
      <Header location={loc}/>
      <Body city={city}/>
    </div>
  );
}

export default App;
