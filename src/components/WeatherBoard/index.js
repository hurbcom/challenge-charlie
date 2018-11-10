import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as weatherActions from '../../actions/weatherActions';

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
    console.log(this.state);
    if(Object.keys(this.state.weather).length === 0)
      return(<div/>);
    else{
      return(
        <div className="weather">
          <div className="today-result"></div>
          <div className="tomorrow-result"></div>
          <div className="after-tomorrow-result"></div>
        </div>
      );
    }
  }
}


const mapStateToProps = (state, ownProps) =>
    ({ weather: state.weather  });

const mapDispatchToProps = (dispatch) =>
    ({ actions: bindActionCreators(weatherActions, dispatch) });

export default connect(mapStateToProps , mapDispatchToProps)(WeatherBoard);