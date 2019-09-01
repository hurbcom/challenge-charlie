// Import React Defaults
import React, { Component } from 'react';

// Import Components
import Page from '../components/template/page';

class Home extends Component {

  async componentDidMount() {
    // Pega as informações de geolocalização do usuário.
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

      /* 
      const { url } = bingData.images[0];

      console.log( url ); */
      

    });
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