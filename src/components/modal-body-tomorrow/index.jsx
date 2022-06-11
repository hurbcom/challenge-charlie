
import React, { useEffect, useState } from 'react'
import { celsiusToFahrenheit, selectWeatherColor } from '../../utils/weather'
import { capitalize } from '../../utils/string'

import { getIconRef } from '../../utils/icons'

import './style.scss'
const ModalBodyTomorrow = props => {
    const { data, title, colorLevel } = props

    const [isCelsiusTemp, setIsCelsiusTemp] = useState(true)
    const [celsiusTemp, setCelsiusTemp] = useState('')
    const [fahrenheitTemp, setFahrenheitTemp] = useState('')
    const [weatherDescription, setWeatherDescription] = useState('')
    const [weatherIcon, setWeatherIcon] = useState(')')
    const [weatherColor, setWeatherColor] = useState(selectWeatherColor(0, colorLevel, true))

    const toggleCurrentTempScale = () => {
        setIsCelsiusTemp(!isCelsiusTemp)
    }

    useEffect(() => {
        if (data.main) {
            const celsius = data?.main?.temp?.toFixed(0)
            const fahrenheit = celsiusToFahrenheit(celsius)
            const descriptionCapitalized = capitalize(data?.weather[0]?.description)
            const weatherIconRef = getIconRef(data?.weather[0]?.main)

            setFahrenheitTemp(fahrenheit)
            setCelsiusTemp(celsius)
            setWeatherDescription(descriptionCapitalized)
            setWeatherColor(
                selectWeatherColor(celsius, colorLevel)
            )
            setWeatherIcon(weatherIconRef)
        }
    }, [data.main])

    return (
        <div className="modal-body-tomorrow-container" style={weatherColor}>
            <div className="modal-body-tomorrow-content">
                <div className="modal-body-tomorrow-temp-icon">
                    <a data-icon={weatherIcon} className="modal-body-tomorrow-sun-status"></a>
                </div>
                <div className="modal-body-tomorrow-weather-infos">
                    <div className="modal-body-tomorrow-temp-status">
                        <div className="modal-body-tomorrow-temp-title">
                            <span>{title || ''}</span>
                        </div>
                        <div className="modal-body-tomorrow-temp-value" onClick={toggleCurrentTempScale}>
                            <span>{!celsiusTemp && !fahrenheitTemp ? '--' : ''}</span>
                            <span>{isCelsiusTemp ? celsiusTemp : fahrenheitTemp}</span>
                            <span>{!celsiusTemp && !fahrenheitTemp ? '--' : isCelsiusTemp ? 'ºC' : 'ºF'}</span>
                        </div>
                        <div className="moda-body-tomorrow-weather-description">
                           <span>{weatherDescription || '--'}</span>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalBodyTomorrow