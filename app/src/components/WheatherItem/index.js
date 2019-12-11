import React from 'react'
import { getDay, getClassName, celciusToFarenheit, farenheitToCelcius } from '../../utils'
import moment from 'moment'
import arrowUp from '../../statics/images/arrow-up.png'
import arrowDown from '../../statics/images/arrow-down.png'
import './index.sass'

export default function ({ 
    wheather, 
    onchangeTemperature,
    isCelsius
}) {
    return (
        <div className={`${getDay(wheather.dt_txt)} ${getClassName(isCelsius ? parseInt(wheather.main.temp) : farenheitToCelcius(parseInt(wheather.main.temp)))} item`}>
            <div>
                <p>{getDay(wheather.dt_txt)} at {moment(wheather.dt_txt).format('HH:mm')}</p>
            </div>
            <div className="container-temperature">
                <p onClick={onchangeTemperature} className="temperature">{`${parseInt(wheather.main.temp)}°${isCelsius ? 'C' : 'F'}`}</p>
                <div className="flex">
                    <span className="center"><img src={arrowUp} />{parseInt(wheather.main.temp_max)}°C</span>
                    <span className="center"><img src={arrowDown} />{parseInt(wheather.main.temp_min)}°C</span>
                </div>
            </div>
            <div>{wheather.weather.map((e, index) => (
                <div key={index}>
                    <img src={`http://openweathermap.org/img/wn/${e.icon}@2x.png`} />
                    <p>Weather: {e.main}, {e.description}</p>
                </div>
            ))}</div>
        </div>
    )
}