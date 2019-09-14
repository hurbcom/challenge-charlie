import React, { Component } from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import axios from 'axios';
import Modal from './components/UI/Modal/Modal';
import Spinner from './components/UI/Spinner/Spinner';


import { connect } from 'react-redux';
import * as fetchWeather from './store/actions/index';

const corsProxy = 'https://cors-anywhere.herokuapp.com'; //https://github.com/Rob--W/cors-anywhere/#documentation

const keyToOpenCage = 'bcb86bd0075b48bdab3b8e3147daeb02';

const openWeatherKey = '63f579b5964ac8e740baf76c46b58699';

class App extends Component {
state = {
  bingImage: '',
  showModal: false,
  error: false,
  loading: true,
  activePlace: {
    activePlace: '',
    cityOnly: '',
    lat: null,
    lon: null,
  },
}

    // A - No lifecycle hook "DIDMOUNT" do principal componente condiciono a exibição do app
    // à recuperação (ou não) do background.

    // Chamo a função referente à API do navegador e sua cadeia de efeitos
    
  componentDidMount () {
    this.backgroundFromBing()
    this.clientCoordinateFromBrowser()
  }

    // 1 - axios pra buscar o plano de fundo a partir do bing.
    // state nessa classe, manipulado na função 1:
    // error: exibe mensagem de erro em vez do app
    // loading: exibe spinner em vez do app
    // success: exibe o app

  backgroundFromBing = async () => {
    try {
      const res = await axios.get(`${corsProxy}/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`)
      const fetchURL = `https://www.bing.com/${res.data.images[0].url}`;
      this.setState({ bingImage: fetchURL });
    }
    catch (err) {
      console.log(err)
      this.setState({error: 'Não foi possível buscar o plano de fundo do aplicativo na API do BING!', showModal: true})
    }
    finally {
      this.setState({ loading: false });
    }
  }

    // 2 - avaliação de disponibilidade do cliente do objeto de extração de location.

  clientCoordinateFromBrowser() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.coordsAPIHandler);
    } else {
      this.setState({error: 'Já que você não autorizou sua localização, segue a capital do seu país.', showModal: true})
    }
  }

    // 3 - Dispatch onLoad para Redux atualizar os cartões exibidos para a localidade do cliente(navegador)

  coordsAPIHandler = async (position) => {

    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    try {
      const res = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${keyToOpenCage}`)
      this.setState({ activePlace: {
        ...this.state.activePlace,
        activePlace: `${res.data.results[0].components.city}, ${res.data.results[0].components.state}`,
        cityOnly: res.data.results[0].components.city,
        lat: position.coords.latitude,
        lon: position.coords.longitude
      }})
      let teste = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${openWeatherKey}`)
      this.props.onGetPlace(res.data.results[0].components.city)
      console.log('teste abaixo:')
      console.log(teste)
    }
    catch (err) {
      this.setState({error: 'A busca por dados retornou com um erro!', showModal: true})
    }
    finally {
      console.log('[FETCH] da API já aconteceu.')
      console.log(this.state)
      
    }
  }


   // Z (UI) Guardar o modal 
  modalSwitchHandler = () => {
    this.setState((prevState) => {
      return {showModal: !prevState.showModal};
  });

  }
     

  render() {

    let myReactApp = <Spinner />
    if (this.state.error) {
      myReactApp = 'erro'
    }
    let pepe = '';
    if (this.state.bingImage) {
      pepe = this.state.bingImage
      myReactApp = <Layout />
    }
    return (
      <div style={{  
        backgroundImage: `url("${pepe}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
           }}
       className="App">
          {myReactApp}
          <button onClick={() => console.log(this.state)}>State</button>
          <button onClick={() => console.log(this.props.cres.data)}>Props</button>
          <button onClick={() => console.log(this.props.onGetPlace(this.state.activePlace.cityOnly))}>Action</button>
          <Modal show={this.state.showModal} modalClosed={this.modalSwitchHandler}> {this.state.error ? this.state.error : ''} </Modal>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
      cres: state.tim,
      
  }
};
const mapDispatchToProps = dispatch => {
  return {
      onGetPlace: (place) => dispatch(fetchWeather.getPlace(place)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
