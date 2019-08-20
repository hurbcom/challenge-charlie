import React from 'react';
import * as WeatherService from './services/weather.service';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localizacao: '',
      icone: '',
      grau: '',
      grau2: '',
      grau3: '',
      modo: 'F',
      descricao: '',
    };
  }

  componentDidMount() {
    this.getWeather();
  }

  async getWeather() {
    const data = await WeatherService.getWeather();
    this.setState({
      localizacao: `${data.location.city}, ${data.location.region}`,
      icone: 'B',
      grau: `${data.current_observation.condition.temperature}º`,
      grau2: `${data.forecasts[1].low}º`,
      grau3: `${data.forecasts[2].low}º`,
    });
  };

  trocaDeGrau() {
    if (this.state.modo === 'F') {
      this.state.modo.setState({
        modo: 'C'
      })
      // caminhoGrau = Math.floor(celsius) + 'º';
    }
  }

  render() {
    return (
      <section className="container">
        <div className="localizacao">
          <h1 className="localizacao-titulo" data-icon="(">{this.state.localizacao}</h1>
        </div>
        <div className="temperatura-caixa">
          <div className="icone" data-icon={this.state.icone}></div>
          <div className="grau-section">
            <p className="dia">HOJE</p>
            <h2 className="grau" onClick={this.trocaDeGrau}>{this.state.grau}</h2>
            <span className="modo">{this.state.modo}</span>
            <div className="descricao">{this.state.descricao}</div>
          </div>
        </div>
        <div className="amanha">
          <p className="dia">AMANHÃ</p>
          <h2 className="grau">{this.state.grau2}</h2>
          <span className="modo">{this.state.modo}</span>
        </div>
        <div className="dia-depois-de-amanha">
          <p className="dia">DEPOIS DE AMANHÃ</p>
          <h2 className="grau">{this.state.grau3}</h2>
          <span className="modo">{this.state.modo}</span>
        </div>
      </section>
    );
  }
}

export default Main;