import './style.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import WeatherBoard from '../WeatherBoard';
import LocationInput from '../LocationInput';
import * as imageActions from '../../actions/imageActions';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      image: '',
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({ image: nextProps.image });
  }

  render() {
    return(
      <div style={{backgroundImage: 'url(' + this.state.image+ ')'}} className="app">
        <div  className='content'>
          <LocationInput/>
          <WeatherBoard/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) =>
    ({ image: state.image });

const mapDispatchToProps = (dispatch) =>
    ({ actions: bindActionCreators(imageActions, dispatch) });

export default connect(mapStateToProps , mapDispatchToProps)(App);