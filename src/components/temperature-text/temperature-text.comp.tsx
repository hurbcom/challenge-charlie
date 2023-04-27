/**
 * This component shows a temperature initially in celsius.
 * When clicked, it shows the temperature in farenheint, and it inverts according to the clicks.
 */

import { Tooltip } from '@components/ui'
import { useTranslation } from 'react-i18next'
import { celsiusToFahrenheit } from '@utils/temperature.utils'
import * as Styles from './temperature-text.styles'

interface TemperatureTextProps {
    temperature: number
    color: string
    showInCelcius: boolean
    onClick: () => void
}

export const TemperatureText: React.FC<TemperatureTextProps> = ({
    temperature,
    color,
    showInCelcius,
    onClick,
}) => {
    const { t } = useTranslation()

    const getTemperature = (temp: number) => {
        if (showInCelcius) {
            return `${Math.round(temp)} °C`
        }
        return `${Math.round(celsiusToFahrenheit(temp))} °F`
    }

    return (
        <Tooltip text={t('change_scale')}>
            <Styles.TemperatureTypography
                variant="subtitle"
                color={color}
                onClick={onClick}
            >
                {getTemperature(temperature)}
            </Styles.TemperatureTypography>
        </Tooltip>
    )
}
