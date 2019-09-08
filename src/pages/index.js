// Import React Defaults
import React, { Component } from 'react';

// Imports Redux Defaults
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Actions Redux
import {
  setUserLocation,
  setUserAuthorization
} from '../redux/actions';

// Import Components
import Page from '../components/template/page';
import WeatherForecast from '../components/organisms/weatherForecast';
import InformeAuthorization from '../components/organisms/informeAuthorization';
import RequestAuthorization from '../components/organisms/RequestAuthorization';

class Home extends Component {

  async componentDidMount() {
    // Reducers
    const { setUserLocation, setUserAuthorization } = this.props;

    // Sinaliza ao usuário a msg de autorização
    setUserAuthorization( 'informe' );

    // Pega as informações de geolocalização do usuário.
    navigator.geolocation.getCurrentPosition( async ( position ) => {

      // Atualiza preferencia do usuário na store
      setUserAuthorization( 'authorized' );

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

      // Envia atualização para a store
      setUserLocation( user_state, user_city, background, climate );

    },
    () => { // Usuário recusou
      // Atualiza preferencia do usuário na store
      setUserAuthorization( 'not_authorized' );
    });
  }

  render() {
    // Recupera state da store
    const { user_authorization, user_location } = this.props;
    return (
      <Page>
        {
          user_authorization === 'informe' && (
            <InformeAuthorization />
          )
        }
        {
          user_authorization === 'not_authorized' && (
            <RequestAuthorization />
          )
        }
        {
          user_authorization === 'authorized' && (
            <WeatherForecast loading={user_location} />
          )
        }
      </Page>
    )
  }
};

// Carrega states
function mapStateToProps ( state ) {
  const { user_location, user_authorization } = state;
  return { user_location, user_authorization }
}

// Dispacha reducers
const mapDispatchToProps = dispatch => bindActionCreators({
  setUserLocation,
  setUserAuthorization,
}, dispatch)

// Conecta a provider, fazendo a ponte entre o react e redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);