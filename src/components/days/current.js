import React, { useEffect, useState } from 'react'
import inputIcon from '../../assets/input-icon.svg'

import {
    TodayInformation,
    CurrentSection,
    InputContainer,
    StyledInput,
    Today,
} from './styles'

import {
    getWindDirection,
    kelvinToCelsius,
    getTempScale,
    convertWindSpeed,
    getTempIcon,
} from '../../utils'

import Title from './title'

const Current = ({ data, color, setColor, city, isCelsius, setIsCelsius }) => {
    const [icon, setIcon] = useState()
    const [humidity, setHumidity] = useState()
    const [pressure, setPressure] = useState()
    const [windSpeed, setWindSpeed] = useState()
    const [temperature, setTemperature] = useState()
    const [windDegrees, setWindDegrees] = useState()
    const [description, setDescription] = useState('')

    useEffect(() => {
        const now = new Date(data.dt * 1000)
        const temp = kelvinToCelsius(data.temp)

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
        <CurrentSection color={color}>
            <InputContainer>
                <img src={inputIcon} alt='input-icon' />
                <StyledInput
                    type='text'
                    name='location'
                    placeholder='Digite a cidade'
                />
            </InputContainer>
            <Title
                isCelsius={isCelsius}
                label={`${city} - Hoje`}
                temperature={temperature}
                description={description}
                onTemperatureClick={setIsCelsius}
            />
            <Today>
                <img src={icon} alt='today-temperature-icon' />
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

export default Current
