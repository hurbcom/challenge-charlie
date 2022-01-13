import React, { useEffect, useState } from 'react'

import Title from './title'
import { NextDaysSection } from './styles'
import { getTempIcon, kelvinToCelsius } from '../../utils'

const Upcoming = ({
    data,
    color,
    isCelsius,
    setIsCelsius,
    label,
    lastSection = false,
}) => {
    const [icon, setIcon] = useState()
    const [temperature, setTemperature] = useState()
    const [description, setDescription] = useState('')

    useEffect(() => {
        const temp = kelvinToCelsius(data.temp.day)

        setTemperature(temp)
        setDescription(data.weather[0].description)
        setIcon(getTempIcon(data.weather[0].id))
    }, [])

    return (
        <NextDaysSection color={color} applyBorder={lastSection}>
            <img src={icon} alt='tomorrow-temperature-icon' />
            <Title
                label={label}
                isCelsius={isCelsius}
                temperature={temperature}
                description={description}
                onTemperatureClick={setIsCelsius}
            />
        </NextDaysSection>
    )
}

export default Upcoming
