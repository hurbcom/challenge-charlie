import React, { Component } from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import axios from 'axios';

const corsProxy = 'https://cors-anywhere.herokuapp.com'; //https://github.com/Rob--W/cors-anywhere/#documentation

class App extends Component {
state = {
  bingImage: '',
  error: false,
  loading: true,
}

    // A - No lifecycle hook "DIDMOUNT" do principal componente condiciono a exibição do app
    // à recuperação (ou não) do background.
    
  componentDidMount () {
    this.backgroundFromBing()
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
      this.setState({ error: true });
      console.log('Bummer- erro:', err)
    }
    finally {
      this.setState({ loading: false });
    }
  }

  render() {
    let myReactApp = 'spinner'
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
      </div>
    );
  }
}

export default App;
