import React from 'react'
import ReactTooltip from 'react-tooltip'
import { useTranslation } from 'react-i18next'

import { Title as Container } from './styles'
import { capitalizeFirstLetter, celsiusToFahrenheit } from '../../utils'

const Title = ({
    city,
    label,
    isCelsius,
    temperature,
    description,
    onTemperatureClick,
}) => {
    const { t } = useTranslation()
    return (
        <Container data-cy={`title-${label}`}>
            <h4>{city ? `${city} - ${label}` : label}</h4>
            <h5>
                <span
                    data-cy={`temperature-${label}`}
                    onClick={onTemperatureClick}
                    data-tip={t('convertTempUnitHint')}
                >
                    {isCelsius
                        ? `${temperature} °C`
                        : `${celsiusToFahrenheit(temperature)} °F`}
                </span>
                <ReactTooltip effect='solid' />
                {' - '}
                <span data-cy={`description-${label}`}>
                    {capitalizeFirstLetter(description)}
                </span>
            </h5>
        </Container>
    )
}

export default Title
