import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as weatherActions from '../../actions/weatherActions';

import Today from './today';

class WeatherBoard extends Component {

  constructor(props){
    super(props);
    this.state = {
      weather: {}
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({weather: nextProps.weather});
  }

  componentDidMount(){
    this.props.actions.getWeatherByLocation('Rio');
  }

  render() {
    var board = (<div/>)
    

    if(Object.keys(this.state.weather).length !== 0){
      console.log(this.state.weather);

      let { forecast } = this.state.weather.item;
      let today = forecast[0];
      let tomorrow = forecast[1];
      let afterTomorrow = forecast[2];
      var { units } = this.state.weather;
      let { wind } = this.state.weather;
      let { atmosphere } = this.state.weather;

      board = (
        <div className="weather">
          <Today forecast={today} units={units} wind={wind} atmosphere={atmosphere}/>
          <div className="tomorrow-result">
            <div>
              Tomorrow
            </div>
            <div>
            {
              tomorrow.low + units.temperature +  
              " ~ " +
              tomorrow.high + units.temperature
            } 
            </div>
          </div>
          <div className="after-tomorrow-result">
          <div>After Tomorrow</div>
            <div>
            {
              afterTomorrow.low + units.temperature +  
              " ~ " +
              afterTomorrow.high + units.temperature
            } 
            </div>
          </div>
        </div>
      );
    }

    return board;
  }
}


const mapStateToProps = (state, ownProps) =>
    ({ weather: state.weather  });

const mapDispatchToProps = (dispatch) =>
    ({ actions: bindActionCreators(weatherActions, dispatch) });

export default connect(mapStateToProps , mapDispatchToProps)(WeatherBoard);