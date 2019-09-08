// Import React Defaults
import React, { Component } from 'react';

// Import Components
import Page from '../components/template/page';

import Climates from '../static/forecast.json';

class Home extends Component {

  async componentDidMount() {
    
    let responseClimate = {};
    const keysNames = [ 'today', 'tomorrow', 'after_tomorrow' ];

    Climates.list.map( climate => {
      
      const day = new Date( climate.dt_txt ).getDate(); 
      const { temp, humidity, pressure } = climate.main;
      const curClimate = responseClimate[day] || {};

      responseClimate[day] = {
        temp: ( curClimate.temp > temp ? curClimate.temp : temp ),
        humidity: ( curClimate.humidity > humidity ? curClimate.humidity : humidity ),
        pressure: ( curClimate.pressure > pressure ? curClimate.pressure : pressure ),
        wind_deg: ( curClimate.wind_deg > climate.wind.speed ? curClimate.wind_deg : climate.wind.deg ),
        wind_speed: ( curClimate.wind_speed > climate.wind.speed ? curClimate.wind_speed : climate.wind.speed )
      };

    });

    Object.keys(responseClimate).map( ( climate, key ) => {
      delete Object.assign(responseClimate, {[keysNames[key]]: responseClimate[climate] })[climate]
    });


    /* // Pega as informações de geolocalização do usuário.
    navigator.geolocation.getCurrentPosition( async ( position ) => {

      // Recupera informações da Latitude e Longitude do usuário
      const { latitude, longitude } = position.coords;

      // Pega informações do usuário e clima para alimentar a aplicação 
      // Requisições feitas pelo lado so servidor para camuflar a API_KEY dos endpoints
      const response = await fetch( `/api/user/infos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          lat: latitude,
          long: longitude
        })
      });
      const userData = await response.json();

      console.log( 'userData', userData );
      

    }); */
  }

  render() {
    return (
      <Page>
        Hello Word
      </Page>
    )
  }
};

export default Home;