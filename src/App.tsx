import React, { useEffect, useState } from 'react';
import './styles/global.css';

import './styles/app.css';
import axios from 'axios';

interface LatLongObject {
  lat: string;
  long: string;
}

function App() {
  const [latLongObj, setLatLongObj] = useState<LatLongObject>();
  
  function showPosition(position: any){
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    transformLatLongInLocale(lat, long);
    setLatLongObj({lat,long})
  }

  function getLocation() {
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(showPosition);
    } else{
      alert("O seu navegador não suporta Geolocalização.");
    }
  }

  function transformLatLongInLocale(lat: string, long:string) {
    // https://api.opencagedata.com/geocode/v1/json?q=lat%2C+long&key=YOUR-API-KEY&pretty=1
    // const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C+${long}&key=c63386b4f77e46de817bdf94f552cddf&language=en`
    const urlWeather = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude=current&appid=2e351511a82a8fd0eba008629abb3bdd`

    axios.get(urlWeather)
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    getLocation();
  },[])


  return (
    <div className="container-fluid p-0 container-sm d-flex justify-content-center">

      <div className="card text-center shadow-lg" style={{ width: "26rem" }}>
  
        <div className="card-header bg-white text-dark font-weight-bold">
          TEMPO E TEMPERATURA
        </div>
  
        <div className="card-body">
          <div className="city">Cidade Exemplo, BR</div>
          <div className="date">Terça, 1 Dezembro 2020</div>
          <div className="container-img">
            <img src="./icons/unknown.png" />
          </div>
          <div className="container-temp mx-4 my-3">
            <div>22</div>
            <span>°c</span>
          </div>
          <div className="weather py-2">Nublado</div>
          <div className="low-high">22°c / 23°c</div>
        </div>
  
        <div className="card-footer bg-white">
          <div className="input-group ">
            <input type="text" className="form-control bg-light" placeholder="digite o nome da cidade" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <div className="input-group-append">
              <button className="btn btn-outline-warning text-dark" type="button" id="button-addon2">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  )
}

export default App
