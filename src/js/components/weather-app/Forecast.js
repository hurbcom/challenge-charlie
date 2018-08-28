import React, { Component } from 'react'
import WeatherIcon from '../utils/selectIcon'
import {convertCtoF} from '../utils/convertCtoF'
import { connect } from 'react-redux'


class Forecast extends Component {
  constructor(props){
    super(props)
  }
  render() {
    
    console.log(this.props);
    return (
      <div className='forecast'>
        <div className="left-forecast box">
          <span className="day">{this.props.day}</span>
        </div>
        <div className="mid-forecast">
         {/* Seleçao de icone ... ver 'src/components/weather-icon' */}
          <WeatherIcon code={parseInt(this.props.code)} />
        </div>
        <div className="right-forecast box">
          <div className='temp'>
          <span><div>{`${convertCtoF(this.props.low,this.props.mainDeg)}/`}</div><div>{`${convertCtoF(this.props.high,this.props.mainDeg)}`}</div></span><span className='deg'><div className={(this.props.mainDeg === true ? 'celcius active' : 'celcius')}>°C</div><div className={(this.props.mainDeg === false ? 'fahr active' : 'celcius')}>°F</div></span>
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
return{
  mainDeg: state.mainDeg
}
}

export default connect(mapStateToProps,null)(Forecast)