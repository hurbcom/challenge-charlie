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
        if (data) {
            const temp = kelvinToCelsius(data.temp.day)
            setTemperature(temp)
            setDescription(data.weather[0].description)
            setIcon(getTempIcon(data.weather[0].id))
        }
    }, [data])

    return (
        <NextDaysSection color={color} applyBorder={lastSection}>
            {data ? (
                <>
                    <img src={icon} alt='tomorrow-temperature-icon' />
                    <Title
                        label={label}
                        isCelsius={isCelsius}
                        temperature={temperature}
                        description={description}
                        onTemperatureClick={setIsCelsius}
                    />
                </>
            ) : (
                <div>{label}</div>
            )}
        </NextDaysSection>
    )
}

export default Upcoming
