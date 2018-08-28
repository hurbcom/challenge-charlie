import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import {getWeather} from './js/actions/location.action'
import { connect } from 'react-redux'
import WeatherApp from './js/components/weather-app/WeatherApp';


class App extends Component {

  componentDidMount(){
    this.props.getLocation()
  }

  render() {
    return (
      <div className="App" style={{backgroundImage:'url(https://source.unsplash.com/daily)',backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <WeatherApp/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch)=>{
return{
  getLocation:bindActionCreators(getWeather,dispatch)
}
}

export default connect(null,mapDispatchToProps)(App)
