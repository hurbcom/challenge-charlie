
import React, { useEffect, useState } from "react"
import { capitalize } from '../../utils/string'

import './style.scss'

const ModalBodyToday = props => {
    const { data } = props

    const [celsiusTemp, setCelsiusTemp] = useState('')
    const [fahrenheitTemp, setFahrenheitTemp] = useState('')
    const [isCelsiusTemp, setIsCelsiusTemp] = useState(true)
    const [weatherDescription, setWeatherDescription] = useState('')
    const [humidity, setHumidity] = useState('')
    const [windPosition, setWindPosition] = useState('')
    const celsiusToFahrenheit = (celsiusTemp) => {
        return (celsiusTemp * 9 / 5 + 32).toFixed(0)

    }

    const changeCurrentTempScale = () => {
        setIsCelsiusTemp(!isCelsiusTemp)
    }

    const windDegreeToCompassDirection = degree => {
        /**
         * Convert wind degree unit to compass direction
         */
        const value = Number((degree/22.5)+.5)
        const positions = [
            "N", "NNE", "NE", "ENE",
            "E", "ESE", "SE", "SSE",
            "S", "SSW", "SW", "WSW", "W",
            "WNW", "NW", "NNW"
        ]
        const index = Math.floor((value % 16))
        const position = positions[index]
        return position
    }

    useEffect(() => {

        if (data.main) {
            
            const celsius = data?.main?.temp?.toFixed(0)
            const fahrenheit = celsiusToFahrenheit(celsius)
            const descriptionCapitalized = capitalize(data?.weather[0]?.description || '')
            const windPositionConverted = windDegreeToCompassDirection(data?.wind?.deg)

            setFahrenheitTemp(fahrenheit)
            setCelsiusTemp(celsius)
            setWeatherDescription(descriptionCapitalized)
            setHumidity(data?.main?.humidity)
            setWindPosition(windPositionConverted)
            
        }
    })

    return (
        <div className="modal-body-today-container">
            {
                data.main ?
                    <div className="modal-body-today-content">
                        <div className="modal-body-today-temp-icon">
                            <a data-icon="B" className="modal-body-today-sun-status"></a>
                        </div>
                        <div className="modal-body-today-weather-infos">
                            <div className="modal-body-today-temp-status" onClick={changeCurrentTempScale}>
                                <div className="modal-body-today-temp-title">
                                    <span>HOJE</span>
                                </div>
                                <div className="modal-body-today-temp-value">
                                    <span>{isCelsiusTemp ? celsiusTemp : fahrenheitTemp}</span>
                                    <span>{isCelsiusTemp ? 'ºC' : 'ºF'}</span>
                                </div>
                            </div>
                            <div className="modal-body-today-sky-status">
                                <div className="modal-body-today-sky-title">
                                    <span>{weatherDescription || 'N/A'}</span>
                                </div>
                                <div className="modal-body-today-sky-wind">
                                    <span>Vento: NO 6.4 km/h</span>
                                </div>
                                <div className="modal-body-today-sky-hum">
                                    <span>Humidade: {humidity ? `${humidity}%` : 'N/A'}</span>
                                </div>
                                <div className="modal-body-today-sky-press">
                                    <span>Pressão: 1003hPA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null
            }
        </div>
    )
}


export default ModalBodyToday