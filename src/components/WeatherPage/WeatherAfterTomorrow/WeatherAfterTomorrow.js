import React, {Component} from 'react';
import './WeatherAfterTomorrow.css';

const toCelsius = require('../../../utils/toCelsius');

class WeatherAfterTomorrow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.afterTomorrow !== undefined) {
            return (<div className="WeatherAfterTomorrow">
                <h2>DEPOIS DE AMANHÃ</h2>
                <h2>Min: {toCelsius.convert(this.props.afterTomorrow.low)}°C Max: {toCelsius.convert(this.props.afterTomorrow.high)}°C</h2>
            </div>);
        } else {
            return (<div className="WeatherAfterTomorrow">
                <h2>DEPOIS DE AMANHÃ</h2>
            </div>);
        }
    }
}

export default WeatherAfterTomorrow;
