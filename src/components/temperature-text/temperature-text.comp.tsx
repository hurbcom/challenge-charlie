import { Tooltip } from '@components/ui'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { celsiusToFahrenheit } from 'src/utils/temperature.utils'
import * as Styles from './temperature-text.styles'

interface TemperatureTextProps {
    temperature: number
}

export const TemperatureText: React.FC<TemperatureTextProps> = ({
    temperature,
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
                color="white"
                onClick={toggleTemperatureScale}
            >
                {getTemperature(temperature)}
            </Styles.TemperatureTypography>
        </Tooltip>
    )
}
