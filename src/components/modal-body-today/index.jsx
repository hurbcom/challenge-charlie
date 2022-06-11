
import React, { useEffect, useState } from "react"
import { capitalize } from '../../utils/string'
import { getIconRef } from '../../utils/icons'
import {
    celsiusToFahrenheit,
    windDegreeToCompassDirection,
    windSpeedMetersToKilometers,
    windSpeedMetersToMiles,
    selectWeatherColor
} from '../../utils/weather'

import './style.scss'

const ModalBodyToday = props => {
    const { data, colorLevel } = props

    const [celsiusTemp, setCelsiusTemp] = useState('')
    const [fahrenheitTemp, setFahrenheitTemp] = useState('')
    const [isCelsiusTemp, setIsCelsiusTemp] = useState(true)
    const [weatherDescription, setWeatherDescription] = useState('')
    const [humidity, setHumidity] = useState('')
    const [windDirection, setWindDirection] = useState('')
    const [windSpeedInKilometers, setWindSpeedInKilometers] = useState('')
    const [windSpeedInMiles, setWindSpeedInMiles] = useState('')
    const [isSpeedInKilometers, setIsSpeedInKilometers] = useState(true)
    const [pressure, setPressure] = useState('')
    const [weatherIcon, setWeatherIcon] = useState(')')
    const [weatherColor, setWeatherColor] = useState(selectWeatherColor(0, colorLevel, true))

    const toggleCurrentTempScale = () => {
        setIsCelsiusTemp(!isCelsiusTemp)
    }

    const toggleCurrentSpeedScale = () => {
        setIsSpeedInKilometers(!isSpeedInKilometers)
    }

    useEffect(() => {

        if (data.main) {

            const celsius = data?.main?.temp?.toFixed(0)
            const fahrenheit = celsiusToFahrenheit(celsius)
            const descriptionCapitalized = capitalize(data?.weather[0]?.description)
            const windPositionConverted = windDegreeToCompassDirection(data?.wind?.deg)
            const weatherIconRef = getIconRef(data?.weather[0]?.main)
            setFahrenheitTemp(fahrenheit)
            setCelsiusTemp(celsius)
            setWeatherDescription(descriptionCapitalized)
            setHumidity(data?.main?.humidity)
            setWindDirection(windPositionConverted)
            setWindSpeedInKilometers(
                windSpeedMetersToKilometers(data?.wind?.speed)
            )
            setWindSpeedInMiles(
                windSpeedMetersToMiles(data?.wind?.speed)
            )
            setPressure(data?.main?.pressure)
            setWeatherIcon(weatherIconRef)
            setWeatherColor(
                selectWeatherColor(celsius, colorLevel)
            )
        }

    }, [data.main])

    return (
        <div className="modal-body-today-container" style={weatherColor} >
            <div className="modal-body-today-content">
                <div className="modal-body-today-temp-icon">
                    <a data-icon={weatherIcon} className="modal-body-today-sun-status"></a>
                </div>
                <div className="modal-body-today-weather-infos">
                    <div className="modal-body-today-temp-status">
                        <div className="modal-body-today-temp-title">
                            <span>HOJE</span>
                        </div>
                        <div className="modal-body-today-temp-value" onClick={toggleCurrentTempScale}>
                            <span>{!celsiusTemp && !fahrenheitTemp ? '--' : ''}</span>
                            <span>{isCelsiusTemp ? celsiusTemp : fahrenheitTemp}</span>
                            <span>{!celsiusTemp && !fahrenheitTemp ? '--' : isCelsiusTemp ? 'ºC' : 'ºF'}</span>
                        </div>
                    </div>
                    <div className="modal-body-today-sky-status">
                        <div className="modal-body-today-sky-title">
                            <span>{weatherDescription || 'N/A'}</span>
                        </div>
                        <div className="modal-body-today-sky-wind">
                            <span onClick={toggleCurrentSpeedScale}>
                                Vento:
                                {windDirection ? ` ${windDirection} ` : ' --'}
                                {
                                    windSpeedInKilometers && isSpeedInKilometers ?
                                        `${windSpeedInKilometers} km/h`
                                        : windSpeedInMiles && !isSpeedInKilometers ?
                                            `${windSpeedInMiles} mph` :
                                            '--'
                                }
                            </span>
                        </div>
                        <div className="modal-body-today-sky-hum">
                            <span>Humidade: {humidity ? `${humidity}%` : 'N/A'}</span>
                        </div>
                        <div className="modal-body-today-sky-press">
                            <span>Pressão: {pressure ? `${pressure}hPA` : 'N/A'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ModalBodyToday