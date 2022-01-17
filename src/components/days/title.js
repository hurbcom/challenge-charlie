import React from 'react'
import ReactTooltip from 'react-tooltip'
import { useTranslation } from 'react-i18next'

import { Title as Container } from './styles'
import { capitalizeFirstLetter, celsiusToFahrenheit } from '../../utils'

const Title = ({
    label,
    isCelsius,
    temperature,
    description,
    onTemperatureClick,
}) => {
    const { t } = useTranslation()
    return (
        <Container>
            <h4>{label}</h4>
            <h5>
                <span
                    onClick={onTemperatureClick}
                    data-tip={t('convertTempUnitHint')}
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
}

export default Title
