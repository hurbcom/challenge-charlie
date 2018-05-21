import React, {Component} from 'react';
import './WeatherTomorrow.css';

const toCelsius = require('../../../utils/toCelsius');

class WeatherTomorrow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      if (this.props.tomorrow !== undefined) {
          return (<div className="WeatherTomorrow">
              <h2>DEPOIS DE AMANHÃ</h2>
              <h2>Min: {toCelsius.convert(this.props.tomorrow.low)}°C Max: {toCelsius.convert(this.props.tomorrow.high)}°C</h2>
          </div>);
      } else {
          return (<div className="WeatherTomorrow">
              <h2>AMANHÃ</h2>
          </div>);
      }
    }
}

export default WeatherTomorrow;
