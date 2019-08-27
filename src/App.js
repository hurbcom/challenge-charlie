import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Container from './container';
// import * as WeatherService from './services/weather.service';
// import * as BackgroundService from './services/background.service';

class Main extends React.Component {

  // componentDidMount() {
  //   this.getWeather();
  //   this.getBackground();
  //   this.changeContentBackground();
  // }

  // async getWeather() {
  //   const data = await WeatherService.getWeather();
  //   this.setState({
  //     localizacao: `${data.location.city}, ${data.location.region}`,
  //     grau: `${data.current_observation.condition.temperature}º`,
  //     grau2: `${data.forecasts[1].low}º`,
  //     grau2max: `${data.forecasts[1].high}º`,
  //     grau3: `${data.forecasts[2].low}º`,
  //     grau3max: `${data.forecasts[2].high}º`,
  //     vento: `${data.current_observation.wind.speed}`,
  //     humidade: `${data.current_observation.atmosphere.humidity}`,
  //     pressao: `${data.current_observation.atmosphere.pressure}`
  //   });
  // };

  // async changeDegree() {
  //   const data = await WeatherService.getWeather();
  //   const grauTemp = `${data.current_observation.condition.temperature}`;
  //   const grauTemp2 = `${data.forecasts[1].low}`;
  //   const grauTemp2max = `${data.forecasts[1].high}`;
  //   const grauTemp3 = `${data.forecasts[2].low}`;
  //   const grauTemp3max = `${data.forecasts[2].high}`;
  //   if (this.state.modo === 'F') {
  //     const celsius = Math.floor((grauTemp - 32) * (5 / 9)) + 'º';
  //     const celsius2 = Math.floor((grauTemp2 - 32) * (5 / 9)) + 'º';
  //     const celsius2max = Math.floor((grauTemp2max - 32) * (5 / 9)) + 'º';
  //     const celsius3 = Math.floor((grauTemp3 - 32) * (5 / 9)) + 'º';
  //     const celsius3max = Math.floor((grauTemp3max - 32) * (5 / 9)) + 'º';
  //     this.setState({
  //       modo: 'C',
  //       grau: celsius,
  //       grau2: celsius2,
  //       grau2max: celsius2max,
  //       grau3: celsius3,
  //       grau3max: celsius3max
  //     });
  //   } else {
  //     this.setState({
  //       modo: 'F',
  //       grau: `${data.current_observation.condition.temperature}º`,
  //       grau2: `${data.forecasts[1].low}º`,
  //       grau2max: `${data.forecasts[1].high}º`,
  //       grau3: `${data.forecasts[1].low}º`,
  //       grau3max: `${data.forecasts[1].high}º`
  //     })
  //   }
  // }

  // async changeContentBackground() {
  //   const data = await WeatherService.getWeather();
  //   const grauTemp = `${data.current_observation.condition.temperature}`;
  //   const celsius = Math.floor((grauTemp - 32) * (5 / 9));
  //   if (celsius < 15) {
  //     this.setState({
  //       bgcolor: 'blue',
  //       icone: 'N'
  //     })
  //   } else if (celsius >= 15 && celsius <= 35) {
  //     this.setState({
  //       bgcolor: `yellow`,
  //       icone: 'H'
  //     })
  //   } else {
  //     this.setState({
  //       bgcolor: 'red',
  //       icone: 'B'
  //     })
  //   }
  // }

  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

export default Main;