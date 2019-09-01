import React, { Component } from 'react';

//Style Import
import { Container, WeatherInfo, ToggleWrapper, ToggleButton } from './style';

//Components Import
import WeatherIcon from './../weatherIcon';
import WeatherName from './../../components/weatherName';

class Weather extends Component {

  state = {
    temperature: '',
    temparatureCelsius: true,
  }

  handleClick = () => this.props.onClick(this.props.index);

  detectDay = (index) => {
    const day = ['HOJE', 'AMANHÃ', 'DEPOIS DE AMANHÃ'];
    return day[index];
  }

  defineBackgroundColor = () => {
    const background = ['rgba(255,38,38, 0.7)', 'rgba(0,64,255, 0.7)', 'rgba(255,201,38, 0.7)'];
    const temperature = this.props.weather.temperatureHigh;

    if(temperature > 95) {
      return background[0];
    } else if(temperature < 59) {
      return background[1];
    } else if(temperature >= 59 && temperature <= 95) {
      return background[2];
    }

  }

  toggleTemperature = () => {
    this.setState({ temparatureCelsius: !this.state.temparatureCelsius});
    this.convertTemperature();
  }

  convertTemperature = () => {
    if(this.state.temparatureCelsius) {
      const celsius = (5/9) * (this.props.weather.temperatureHigh - 32);
      this.setState({ temperature: `${(celsius).toFixed(0)}°C`});
    } else {
      this.setState({ temperature: `${(this.props.weather.temperatureHigh).toFixed(0)}°F`});
    }
  }

  componentDidMount() {
    this.convertTemperature();
  }

  render() {
    return(
      <Container animate={this.props.isActive} backgroundColor={this.defineBackgroundColor()}>
        <div>
          <WeatherIcon iconName={this.props.weather.icon} />
        </div>

        <div>
          <ToggleWrapper>
            <ToggleButton onClick={this.handleClick}>{this.props.isActive? '-' : '+'}</ToggleButton>
          </ToggleWrapper>

          <WeatherInfo show={this.props.isActive}>
            <h1 onClick={this.toggleTemperature}>{this.detectDay(this.props.index)} ({this.state.temperature})</h1>
            <WeatherName weatherName={this.props.weather.icon}/>
            <h3>Vento: {this.props.weather.windSpeed}</h3>
            <h3>Humidade: {(this.props.weather.humidity * 100).toFixed(0)}%</h3>
            <h3>Pressão: {this.props.weather.windSpeed}</h3>
          </WeatherInfo>
          
          <div></div>
        </div>
      </Container>
    );
  }
}

export default Weather;