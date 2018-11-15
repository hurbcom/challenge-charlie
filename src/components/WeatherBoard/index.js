import './style.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ramda from 'ramda';
import * as weatherActions from '../../actions/weatherActions';

import Icon from './Icon';
import Today from './Today';
import OtherDay from './OtherDays';

class WeatherBoard extends Component {

  constructor(props){
    super(props);
    this.state = {
      weather: {},
      unit: 'F',
      color: 'yellow'
    }
    
    this.convertForecast = this.convertForecast.bind(this);
    this.getColor = this.getColor.bind(this);
  }

  getColor(){
    const forecast = ramda.path(
      ['item', 'forecast'], this.state.weather);

    if (forecast) {
      console.log(parseInt(forecast[0].high));
      console.log(parseInt(forecast[0].low));
      if(parseInt(forecast[0].high) > 95){
        this.setState({color: 'red'});
      } 
      else if(parseInt(forecast[0].low) < 59){
        this.setState({color: 'blue'});
      }
      else{
        this.setState({color: 'yellow'});
      }
    }
  }

  convertForecast(forecast){
    if(this.state.unit === 'C'){
      return { 
        ... forecast, 
        high: ((parseInt(forecast.high) - 32)/1.800).toFixed(0), 
        low: ((parseInt(forecast.low) - 32)/1.800).toFixed(0)
      };
    }
    else
      return forecast
  }

  componentWillReceiveProps(nextProps){
    this.setState({weather: nextProps.weather, unit: nextProps.unit}, () => this.getColor());
  }

  render() {
    var board = (<div/>)
    console.log(this.state);

    if(Object.keys(this.state.weather).length !== 0){

      let { forecast } = this.state.weather.item;
      let today = forecast[0];
      let tomorrow = forecast[1];
      let afterTomorrow = forecast[2];
      var { units } = this.state.weather;
      let { wind } = this.state.weather;
      let { atmosphere } = this.state.weather;
      let { color } = this.state;

      board = (
        <div  className="weather">
        <div style={{backgroundColor: 'rgba(var(--' + color + '), 0.9)'}}className="weather__today">
          <Icon code={today.code}/>
          <Today 
            forecast={this.convertForecast(today)} 
            units={units} 
            wind={wind} 
            atmosphere={atmosphere}
          />
        </div>
        <div className="weather__otherDays">
          <div 
            style={{backgroundColor: 'rgba(var(--' + color + '-medium), 0.9)'}} 
            className="weather__otherDays__tomorrow"
          >
            <OtherDay title={"Tomorrow"} forecast={this.convertForecast(tomorrow)}/>
          </div>
          <div  
            style={{backgroundColor: 'rgba(var(--' + color + '-darker), 0.9)'}} 
            className="weather__otherDays__after"
          >
            <OtherDay title={"After Tomorrow"}forecast={this.convertForecast(afterTomorrow)}/>
          </div>
        </div>
        </div>
      );
    }

    return board;
  }
}


const mapStateToProps = (state, ownProps) =>
    ({ weather: state.weather, unit: state.unit  });

const mapDispatchToProps = (dispatch) =>
    ({ actions: bindActionCreators(weatherActions, dispatch) });

export default connect(mapStateToProps , mapDispatchToProps)(WeatherBoard);