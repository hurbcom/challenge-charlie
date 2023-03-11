import { useEffect, useState } from "react";

export const useWindowSize = (() => typeof window !== 'undefined' ? () => {
    const [value, setValue] = useState(() => ({
        width: window.innerWidth,
        height: window.innerHeight,
    }))

    const handler = () => {
        setValue({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }

    useEffect(() => {
        window.addEventListener('resize', handler)

        return () => window.removeEventListener('resize', handler)
    }, [])

    return value;
} : () => ({width: 0, height: 0}))();
