import React, { Component } from 'react'
import WeatherIcon from '../utils/selectIcon'
import Search from './Search';
import { connect } from 'react-redux';
import {convertCtoF} from '../utils/convertCtoF'
import {changeDeg} from '../../actions/changeDeg'
class MainTemp extends Component {
    render() {

        
        
        return (
            
            <div className="main-temp">
                <Search />
                <WeatherIcon code={parseInt(this.props.weather.condition.code)} />
                <div className="bottom-main">
                    <div className="left-bottom">
                        <div onClick={this.props.changeDeg} className='temp'>
                        {convertCtoF(this.props.weather.condition.temp,this.props.mainDeg)} <span className='deg'><div className={(this.props.mainDeg === true ? 'celcius active' : 'celcius')}>°C</div><div className={(this.props.mainDeg === false ? 'fahr active' : 'celcius')}>°F</div></span>
                        </div>
                        <div className='city'>
                        {this.props.weather.city}
                        </div>
                        <div className='name-condition'>
                        {this.props.weather.condition.text}
                        </div>
                    </div>
                    <div className="right-bottom">
                        <div>
                        vento
                        </div>
                        <div>
                        pressao
                        </div>
                        <div>
                        umidade
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
return{
    weather:state.weather,
    mainDeg:state.mainDeg
}
}

const mapDispatchToProps = (dispatch)=>{
return{
    changeDeg:function(){
        dispatch(changeDeg())
    }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(MainTemp)