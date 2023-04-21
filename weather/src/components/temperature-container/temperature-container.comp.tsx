import { Box } from '@components/ui'
import { BoxProps } from '@components/ui/Box/box.types'
import { useMemo } from 'react'

interface TemperatureContainerProps extends BoxProps {
    colors: string[]
    defaultColor: string
    temperature?: number
    children?: React.ReactNode
}

export const TemperatureContainer: React.FC<TemperatureContainerProps> = ({
    colors,
    temperature,
    defaultColor,
    children,
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
            {children}
        </Box>
    )
}
