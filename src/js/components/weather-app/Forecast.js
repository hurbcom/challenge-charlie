import React, { Component } from 'react'
import WeatherIcon from '../../utils/selectIcon'
import {convertCtoF} from '../../utils/convertCtoF'
import { connect } from 'react-redux'
import {translate} from '../../utils/translate'

class Forecast extends Component {
  render() {

    return (
      !this.props.noLocation
      ?<div className={`forecast ${this.props.colorByTemp}`}>
        <div className="left-forecast box">
          <span className="day">{this.props.lang === 'en' ? this.props.day : translate(this.props.day)}</span>
        </div>
        <div className="mid-forecast">
         {/* Seleçao de icone ... ver 'src/components/weather-icon' */}
          <WeatherIcon code={parseInt(this.props.code,10)} />
        </div>
        <div className="right-forecast box">
          <div className='temp'>
          <span><div>{`${convertCtoF(this.props.low,this.props.mainDeg)}/`}</div><div>{`${convertCtoF(this.props.high,this.props.mainDeg)}`}</div></span><span className='deg'><div className={(this.props.mainDeg === true ? 'celcius active' : 'celcius')}>°C</div><div className={(this.props.mainDeg === false ? 'fahr active' : 'celcius')}>°F</div></span>
          </div>
        </div>
        {this.props.children}
      </div>
      : <div className='forecast grey-back'></div>
      
    )
  }
}

const mapStateToProps = (state)=>{
return{
  noLocation: state.noLocation,
  mainDeg: state.mainDeg
}
}

export default connect(mapStateToProps,null)(Forecast)