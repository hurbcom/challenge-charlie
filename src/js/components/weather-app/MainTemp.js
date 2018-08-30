import React, { Component } from 'react'
import WeatherIcon from '../../utils/selectIcon'
import Search from './Search';
import { connect } from 'react-redux';
import {convertCtoF} from '../../utils/convertCtoF'
import {convertUnits} from '../../utils/convertUnits'
import {changeDeg} from '../../actions/changeDeg'
import {colorByTemp} from '../../utils/colorByTemp'
import {translate} from '../../utils/translate'
class MainTemp extends Component {
    render() {

        const conditionLang = this.props.lang === 'en';
        console.log(this.props.lang);
        
        return (
            !this.props.noLocation
            ?<div className={`main-temp`}>
            <div className={colorByTemp(this.props.weather.condition.temp)}>
                <Search lang={this.props.lang}/>
                <WeatherIcon code={parseInt(this.props.weather.condition.code,10)} />
                <div className="bottom-main">
                    <div className="left-bottom">
                        <div onClick={this.props.changeDeg} className='temp'>
                        {convertCtoF(this.props.weather.condition.temp,this.props.mainDeg)} <span className='deg'><div className={(this.props.mainDeg === true ? 'celcius active' : 'celcius')}>°C</div><div className={(this.props.mainDeg === false ? 'fahr active' : 'celcius')}>°F</div></span>
                        </div>
                        <div className='city'>
                        {this.props.weather.city}
                        </div>
                        <div className='dia'>
                        {conditionLang ? 'Today' : 'Hoje'}
                        </div>
                    </div>
                    <div className="right-bottom">
                        <div className='name-condition'>
                       {/*Verifica a lingua, se é inglês não traduz. A tradução é feita a partir do codigo pois a filtragem fica mais facil*/} 
                        {conditionLang ? this.props.weather.condition.text : translate(this.props.weather.condition.code)}
                        </div>
                        <div id='wind-condition'>
                        <span>{conditionLang? 'wind' : 'vento'}: {convertUnits(this.props.weather.wind.speed,'mph')} km/h</span>
                        </div>
                        <div id='pressure-condition'>
                        <span>{conditionLang? 'pressure' : 'pressão'}: {convertUnits(this.props.weather.atmosphere.pressure,'in')} atm</span>
                        </div>
                        <div id='humidity-condition'>
                        <span>{conditionLang? 'humidity' : 'umidade'}: {this.props.weather.atmosphere.humidity}%</span>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            : <div className={`main-temp`}>
            <div className="grey-back">
            <Search />
            <div className="error-message">
            {conditionLang ? 'No Locations Found' : 'Nenhuma localidade encontrada, tente de novo'}
            </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
return{
    lang:state.lang,
    noLocation: state.noLocation,
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