import React, { Component } from 'react';
import Text from './Text';

export default class Forecast extends Component {

	constructor() {
		super();
		this.state = {
			isCelsius: true,
			today: null,
			tomorrow: null,
			afterTomorrow: null,
			temperature: null
		}
	}

	componentWillMount() {
		this.toggleTemperature(this.props.data.temperatures)
	}

	toCelsius(temperature) {
		return Math.round((parseInt(temperature) - 32) / (9 / 5));
	}
	toFarenheit(temperature) {
		return Math.round((parseInt(temperature) + 32) / (9 / 5));
	}

	toggleTemperature(temperature) {

		if(this.state.isCelsius) {
			let today = this.toCelsius(temperature[0]);	
			let tomorrow = this.toCelsius(temperature[1]);	
			let afterTomorrow = this.toCelsius(temperature[2]);	

			this.setState({
				isCelsius: false,
				today: today,
				tomorrow: tomorrow,
				afterTomorrow: afterTomorrow
			})

		} else {
			let today = this.toFarenheit(temperature[0]);	
			let tomorrow = this.toFarenheit(temperature[1]);	
			let afterTomorrow = this.toFarenheit(temperature[2]);	

			this.setState({
				isCelsius: true,
				today: today,
				tomorrow: tomorrow,
				afterTomorrow: afterTomorrow
			})
			
		}
	}
	render() {
console.log('forecast')
		return (
			<div className="forecast">
				<div className="container box-today">
					<Text 
						className="box-forecast"
						text="Hoje"/>

					<p 
						className="temperatures" 
						onClick={ this.toggleTemperature.bind(this, this.props.data.temperatures)}>
						{ this.state.isCelsius ? `${this.state.today}ºF ` : `${this.state.today}ºC ` }
					</p>
				</div>
				<div className="container box-tommorrow">
					<Text 
						className="box-forecast"
						text="Amanhã"/>
					<p 
						className="temperatures" 
						onClick={ this.toggleTemperature.bind(this, this.props.data.temperatures)}>
						{ this.state.isCelsius ? `${this.state.tomorrow}ºF ` : `${this.state.tomorrow}ºC ` }
					</p>
				</div>
				<div className="container box-after-tommorrow">
					<Text 
						className="box-forecast"
						text="Depois de amanhã"/>
					<p 
						className="temperatures" 
						onClick={ this.toggleTemperature.bind(this, this.props.data.temperatures)}>
						{ this.state.isCelsius ? `${this.state.afterTomorrow}ºF ` : `${this.state.afterTomorrow}ºC ` }
					</p>
				</div>
			</div>
		);
	}
}