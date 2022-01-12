import React, { useEffect, useState } from 'react'
import inputIcon from '../../assets/input-icon.svg'

import {
    TodayInformation,
    CurrentSection,
    InputContainer,
    StyledInput,
    Title,
    Today,
} from './styles'

import {
    capitalizeFirstLetter,
    getWindDirection,
    kelvinToCelsius,
    getTempScale,
    convertWindSpeed,
    getTempIcon,
    celsiusToFahrenheit,
} from '../../utils'

const CurrentWeatherArea = ({
    data,
    color,
    setColor,
    city,
    isCelsius,
    setIsCelsius,
}) => {
    const [icon, setIcon] = useState()
    const [humidity, setHumidity] = useState()
    const [pressure, setPressure] = useState()
    const [windSpeed, setWindSpeed] = useState()
    const [temperature, setTemperature] = useState()
    const [windDegrees, setWindDegrees] = useState()
    const [description, setDescription] = useState('')

    useEffect(() => {
        const now = new Date(data.dt * 1000)
        const temp = kelvinToCelsius(data.temp).toFixed()

        setTemperature(temp)
        setHumidity(data.humidity)
        setPressure(data.pressure)
        setColor(getTempScale(temp))
        setWindDegrees(data.wind_deg)
        setDescription(data.weather[0].description)
        setWindSpeed(convertWindSpeed(data.wind_speed))
        setIcon(getTempIcon(data.weather[0].id, now.getHours()))
    }, [])

    return (
        <CurrentSection color={color.high}>
            <InputContainer>
                <img src={inputIcon} alt='input-icon' />
                <StyledInput
                    type='text'
                    name='location'
                    placeholder='Digite a cidade'
                />
            </InputContainer>
            <Title>
                <h4>{city} - Hoje</h4>
                <h5>
                    <span onClick={setIsCelsius}>
                        {isCelsius
                            ? `${temperature} °C`
                            : `${celsiusToFahrenheit(temperature)} °F`}
                    </span>
                    {' - '}
                    {capitalizeFirstLetter(description)}
                </h5>
            </Title>
            <Today>
                <img src={icon} alt='temperature-icon' />
                <TodayInformation>
                    <p>
                        Vento: {getWindDirection(windDegrees)} {windSpeed}
                        {'km/h'}
                    </p>
                    <p>
                        Humidade: {humidity} {'%'}
                    </p>
                    <p>
                        Pressão: {pressure} {'hPA'}
                    </p>
                </TodayInformation>
            </Today>
        </CurrentSection>
    )
}

export default CurrentWeatherArea
