import { useEffect, useState } from 'react'

export const hasWindow = typeof window === 'object'

export const useWindowSize = (initialWidth = Infinity) => {
    const [state, setState] = useState({
        width: hasWindow ? window.innerWidth : initialWidth,
    })

    useEffect(() => {
        if (hasWindow) {
            const handler = () =>
                setState({
                    width: window.innerWidth,
                })
            window.addEventListener('resize', handler)
            return () => window.removeEventListener('resize', handler)
        } else {
            return undefined
        }
    }, [])

    return state
}
