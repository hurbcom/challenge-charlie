import { useLayoutEffect, useState } from 'react'

export type DeviceType = 'phone' | 'tablet' | 'desktop'

const TABLET_BREAKPOINT = 480
const DESKTOP_BREAKPOINT = 768

export const useDevice = () => {
    const [device, setDevice] = useState<DeviceType>('desktop')

    useLayoutEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth
            if (width < TABLET_BREAKPOINT) {
                setDevice('phone')
                return
            }
            if (width < DESKTOP_BREAKPOINT) {
                setDevice('tablet')
                return
            }
            setDevice('desktop')
        }
        updateSize()
        window.addEventListener('resize', updateSize)
        return () => window.removeEventListener('resize', updateSize)
    }, [])

    return { device }
}
