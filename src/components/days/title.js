import React from 'react'
import ReactTooltip from 'react-tooltip'

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
            <span
                onClick={onTemperatureClick}
                data-tip='Clique para converter a unidade'
            >
                {isCelsius
                    ? `${temperature} °C`
                    : `${celsiusToFahrenheit(temperature)} °F`}
            </span>
            <ReactTooltip effect='solid' />
            {' - '}
            {capitalizeFirstLetter(description)}
        </h5>
    </Container>
)

export default Title
