import React, { Component } from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import axios from 'axios';

const corsProxy = 'https://cors-anywhere.herokuapp.com'; //https://github.com/Rob--W/cors-anywhere/#documentation

class App extends Component {
state = {
  bingImage: '',
}
  componentDidMount () {
    this.backGroundFromBing()
  }

  backGroundFromBing = async () => {
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
    let pepe = '';
    if (this.state.bingImage) {
      pepe = this.state.bingImage
    }
    return (
      <div style={{  
        backgroundImage: `url("${pepe}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
       className="App">
          <Layout />
          {/* <img src={pepe} alt='img'/> */}
      </div>
    );
  }
}

export default App;
