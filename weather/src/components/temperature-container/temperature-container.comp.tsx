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
