// Import React Defaults
import React, { Component } from 'react';

// Imports Redux Defaults
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Actions Redux
import { setUserLocation } from '../redux/actions';

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

      // Recupera informações do fetch
      const { user_state, user_city, background, climate } = userData.data;

      console.log( climate );

      // Envia atualização para a store
      this.props.setUserLocation( user_state, user_city, background, climate );

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

function mapStateToProps ( state ) {
  const { user_state, user_city, background, climate } = state;
  return { user_state, user_city, background, climate }
}

const mapDispatchToProps = dispatch => bindActionCreators({ setUserLocation }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);