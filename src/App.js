import React from 'react';
import * as WeatherService from './services/weather.service';
import * as BackgroundService from './services/background.service';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.changeDegree = this.changeDegree.bind(this);
    this.state = {
      background: '',
      localizacao: '',
      icone: '',
      grau: '',
      grau2: '',
      grau2max: '',
      grau3: '',
      grau3max: '',
      modo: 'F',
      descricao: '',
    };
  }

  componentDidMount() {
    this.getWeather();
    this.getBackground();
  }

  async getBackground() {
    const data = await BackgroundService.getBackground();
    this.setState({
      background: `https://www.bing.com${data.images[0].url}`
    })
  };

  async getWeather() {
    const data = await WeatherService.getWeather();
    this.setState({
      localizacao: `${data.location.city}, ${data.location.region}`,
      icone: 'B',
      grau: `${data.current_observation.condition.temperature}º`,
      grau2: `${data.forecasts[1].low}º`,
      grau2max: `${data.forecasts[1].high}º`,
      grau3: `${data.forecasts[2].low}º`,
      grau3max: `${data.forecasts[2].high}º`,
    });
  };

  async changeDegree() {
    const data = await WeatherService.getWeather();
    const grauTemp = `${data.current_observation.condition.temperature}`;
    const grauTemp2 = `${data.forecasts[1].low}`;
    const grauTemp2max = `${data.forecasts[1].high}`;
    const grauTemp3 = `${data.forecasts[2].low}`;
    const grauTemp3max = `${data.forecasts[2].high}`;
    if (this.state.modo === 'F') {
      const celsius = Math.floor((grauTemp - 32) * (5 / 9)) + 'º';
      const celsius2 = Math.floor((grauTemp2 - 32) * (5 / 9)) + 'º';
      const celsius2max = Math.floor((grauTemp2max - 32) * (5 / 9)) + 'º';
      const celsius3 = Math.floor((grauTemp3 - 32) * (5 / 9)) + 'º';
      const celsius3max = Math.floor((grauTemp3max - 32) * (5 / 9)) + 'º';
      this.setState({
        modo: 'C',
        grau: celsius,
        grau2: celsius2,
        grau2max: celsius2max,
        grau3: celsius3,
        grau3max: celsius3max
      });
    } else {
      this.setState({
        modo: 'F',
        grau: `${data.current_observation.condition.temperature}º`,
        grau2: `${data.forecasts[1].low}º`,
        grau2max: `${data.forecasts[1].high}º`,
        grau3: `${data.forecasts[1].low}º`,
        grau3max: `${data.forecasts[1].high}º`
      })
    }
  }

  render() {
    return (
      <section className="main-content" style={{ backgroundImage: `url(${this.state.background})` }}>
        <div className="container">
          <div className="localizacao">
            <h1 className="localizacao-titulo" data-icon="(">{this.state.localizacao}</h1>
          </div>
          <div className="temperatura-caixa">
            <div className="icone" data-icon={this.state.icone}></div>
            <div className="grau-section">
              <p className="dia">HOJE</p>
              <h2 className="grau" onClick={this.changeDegree}>{this.state.grau}</h2>
              <span className="modo">{this.state.modo}</span>
              <div className="descricao">{this.state.descricao}</div>
            </div>
          </div>
          <div className="amanha">
            <p className="dia">AMANHÃ</p>
            <h2 className="grau" onClick={this.changeDegree}>Min: {this.state.grau2}<span className="modo">{this.state.modo}</span></h2>
            <h2 className="grau" onClick={this.changeDegree}>Max: {this.state.grau2max}<span className="modo">{this.state.modo}</span></h2>
          </div>
          <div className="dia-depois-de-amanha">
            <p className="dia">DEPOIS DE AMANHÃ</p>
            <h2 className="grau" onClick={this.changeDegree}>Min: {this.state.grau3}<span className="modo">{this.state.modo}</span></h2>
            <h2 className="grau" onClick={this.changeDegree}>Max: {this.state.grau3max}<span className="modo">{this.state.modo}</span></h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Main;