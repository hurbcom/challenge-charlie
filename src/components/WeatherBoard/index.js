import './style.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as weatherActions from '../../actions/weatherActions';

import Icon from './Icon';
import Today from './Today';
import OtherDay from './OtherDays';

class WeatherBoard extends Component {

  constructor(props){
    super(props);
    this.state = {
      weather: {},
      unit: 'F'
    }
    
    this.convertForecast = this.convertForecast.bind(this);
  }

  convertForecast(forecast){
    if(this.state.unit === 'C'){
      return { 
        ... forecast, 
        high: ((parseInt(forecast.high) - 32)/1.800).toFixed(1), 
        low: ((parseInt(forecast.low) - 32)/1.800).toFixed(1)
      };
    }
    else
      return forecast
  }

  componentWillReceiveProps(nextProps){
    this.setState({weather: nextProps.weather, unit: nextProps.unit});
  }

  render() {
    var board = (<div/>)
    

    if(Object.keys(this.state.weather).length !== 0){

      let { forecast } = this.state.weather.item;
      let today = forecast[0];
      let tomorrow = forecast[1];
      let afterTomorrow = forecast[2];
      var { units } = this.state.weather;
      let { wind } = this.state.weather;
      let { atmosphere } = this.state.weather;

      board = (
        <div className="weather">
        <div className="weather__today">
          <Icon code={today.code}/>
          <Today 
            forecast={this.convertForecast(today)} 
            units={units} 
            wind={wind} 
            atmosphere={atmosphere}
          />
        </div>
        <div className="weather__otherDays">
          <div className="weather__otherDays__emptySpace">

          </div>
          <div className="weather__otherDays__content">
            <OtherDay title={"Tomorrow"} forecast={this.convertForecast(tomorrow)}/>
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