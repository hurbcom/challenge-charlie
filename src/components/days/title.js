import React from 'react'

import { Title as Container } from './styles'
import { capitalizeFirstLetter, celsiusToFahrenheit } from '../../utils'

const Title = ({
    label,
    isCelsius,
    temperature,
    description,
    onTemperatureClick,
}) => (
    <Container>
        <h4>{label}</h4>
        <h5>
            <span onClick={onTemperatureClick}>
                {isCelsius
                    ? `${temperature} °C`
                    : `${celsiusToFahrenheit(temperature)} °F`}
            </span>
            {' - '}
            {capitalizeFirstLetter(description)}
        </h5>
    </Container>
)

export default Title
