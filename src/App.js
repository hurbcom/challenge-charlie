import React, {useEffect, useState} from 'react';
import './App.css';
import Background from './components/background/background';
import Header from './components/header/header';

function App() {
  const [loc,setLoc] = useState('');

  useEffect(() =>{
    const getLocation = async (pos) => {
      await fetch('https://api.opencagedata.com/geocode/v1/json?q='+pos.coords.latitude+','+pos.coords.longitude+'&key=c63386b4f77e46de817bdf94f552cddf&language=en').then(res => res.json())
      .then((data) => {
        console.log(data.results);
        setLoc(data.results[0].components.city + ' - ' + data.results[0].components.state );
      });
    }
    navigator.geolocation.getCurrentPosition(getLocation);
  });

  

  return (
    <div className="App">
      <Background />
      <Header location={loc}/>
    </div>
  );
}

export default App;
