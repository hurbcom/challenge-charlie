/**
 * This component is responsible for fetching the background in the bing api and showing it on the screen.
 * If the theme is dark, it shows an overlay to reduce the brightness of the image.
 */

import { useEffect, useState } from 'react'
import { requests } from '@services'
import * as Styles from './dynamic-background.styles'
import { useTheme } from '@styles/theme-provider'
import { BoxProps } from '@components/ui/box/box.types'

interface Props extends BoxProps {
    children?: React.ReactNode
}

export const DynamicBackground: React.FC<Props> = ({ children, ...rest }) => {
    const [background, setBackground] = useState<string>()

    const { themeName } = useTheme()

    const fetchBackground = async () => {
        const url = await requests.bing.getBackgroundUrl()
        setBackground(url)
    }

    useEffect(() => {
        fetchBackground()
    }, [])

    return (
        <Styles.Background url={background}>
            <Styles.Overlay show={themeName === 'dark'} {...rest}>
                {children}
            </Styles.Overlay>
        </Styles.Background>
    )
}
