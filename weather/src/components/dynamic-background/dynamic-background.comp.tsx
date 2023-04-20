import { useEffect, useState } from 'react'
import { requests } from '@services'
import * as Styles from './dynamic-background.styles'

type Props = {
    children: React.ReactNode
}

export const DynamicBackground: React.FC<Props> = ({ children }) => {
    const [background, setBackground] = useState<string>()

    const fetchBackground = async () => {
        const response = await requests.bing.getBackground()
        setBackground(response.images[0].url)
    }

    useEffect(() => {
        fetchBackground()
    }, [])

    return <Styles.Background url={background}>{children}</Styles.Background>
}
