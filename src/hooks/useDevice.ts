/**
 * This hook is intended to watch screen size changes for responsiveness.
 * It returns what the current screen size is based on breakpoints.
 * Sizes are desktop, tablet and phone.
 */

import { useLayoutEffect, useState } from 'react'
import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from '@utils/constants.utils'

export type DeviceType = 'phone' | 'tablet' | 'desktop'

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
