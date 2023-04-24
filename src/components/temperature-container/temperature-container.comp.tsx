/**
 * This component receives an array with 3 colors, a default color and a temperature.
 * It returns the color according to the received temperature.
 * If the temperature is less than 15°C, it returns the first item in the array.
 * If it is between 15°C and 35°C, it returns the second.
 * If it is greater than 35°C, it returns the third element of the array.
 * If the temperature is not passed, the default color is displayed.
 * Furthermore, if the loading property is set to true, a spinner is shown instead of the content inside children.
 */

import { Box } from '@components/ui'
import { BoxProps } from '@components/ui/box/box.types'
import { Spinner } from '@components/ui/spinner/spinner.styles'
import { useMemo } from 'react'

interface TemperatureContainerProps extends BoxProps {
    colors: string[]
    defaultColor: string
    temperature?: number
    children?: React.ReactNode
    loading?: boolean
}

export const TemperatureContainer: React.FC<TemperatureContainerProps> = ({
    colors,
    temperature,
    defaultColor,
    children,
    loading,
    ...rest
}) => {
    const currentColor = useMemo(() => {
        if (!temperature) {
            return defaultColor
        }
        if (temperature < 15) {
            return colors[0]
        }
        if (temperature <= 35) {
            return colors[1]
        }
        return colors[2]
    }, [colors, temperature, defaultColor])

    return (
        <Box background={currentColor} {...rest}>
            {loading ? (
                <Box
                    width="100%"
                    height="100%"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Spinner />
                </Box>
            ) : (
                children
            )}
        </Box>
    )
}
