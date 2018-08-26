import React, { Component } from 'react';
import logo from './logo.svg';
import { bindActionCreators } from 'redux'
import {getWeather} from './js/actions/location.action'
import { connect } from 'react-redux'


class App extends Component {

  componentDidMount(){
    this.props.getImage()
  }

  render() {
    return (
      <div className="App" style={{backgroundImage:'url(https://source.unsplash.com/daily)',backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch)=>{
return{
  getImage:bindActionCreators(getWeather,dispatch)
}
}

export default connect(null,mapDispatchToProps)(App)
