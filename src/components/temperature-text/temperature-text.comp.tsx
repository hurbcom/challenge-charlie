/**
 * This component shows a temperature initially in celsius.
 * When clicked, it shows the temperature in farenheint, and it inverts according to the clicks.
 */

import { Tooltip } from '@components/ui'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { celsiusToFahrenheit } from '@utils/temperature.utils'
import * as Styles from './temperature-text.styles'

interface TemperatureTextProps {
    temperature: number
    color: string
}

export const TemperatureText: React.FC<TemperatureTextProps> = ({
    temperature,
    color,
}) => {
    const [showInCelcius, setShowInCelcius] = useState<boolean>(true)

    const { t } = useTranslation()

    const getTemperature = (temp: number) => {
        if (showInCelcius) {
            return `${Math.round(temp)} °C`
        }
        return `${Math.round(celsiusToFahrenheit(temp))} °F`
    }

    const toggleTemperatureScale = () => {
        setShowInCelcius((current) => !current)
    }

    return (
        <Tooltip text={t('change_scale')}>
            <Styles.TemperatureTypography
                variant="subtitle"
                color={color}
                onClick={toggleTemperatureScale}
            >
                {getTemperature(temperature)}
            </Styles.TemperatureTypography>
        </Tooltip>
    )
}
