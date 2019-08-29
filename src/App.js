import React, { useState, useEffect }  from 'react';

import Background from "./components/Background/Background";
import SideWeather from "./components/sideWeather/sideWeather";

function App() {
  const [ location, setLocation] = useState({});

  useEffect(()=> {
    navigator.geolocation.watchPosition(success, error)
  },[])

  function success( pos ) {
    const { latitude, longitude } = pos.coords;
    setLocation({latitude, longitude})
  }

  function error(err) {
    console.warn('ERRO(' + err.code + '): ' + err.message);
  }


  return (
  <>
   <Background></Background>
   <SideWeather location={location}></SideWeather>
   {/* <ul>
     <li>latitude: {location.latitude}</li>
     <li>longitude: {location.longitude}</li>
   </ul> */}
  </>
  );
}

export default App;
