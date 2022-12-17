import React, {
    createContext,
    ReactNode,
    useState,
} from 'react'

interface Location {
    lat: number
    long: number
}

interface WeatherContextType {
    backgroundImage: string,
    setBackgroundImage: React.Dispatch<React.SetStateAction<string>>,
    location: Location,
    setLocation: React.Dispatch<React.SetStateAction<Location>>
}

export const WeatherContext = createContext({} as WeatherContextType)

interface WeatherContextProviderProps {
    children: ReactNode
}

export function WeatherContextProvider({
    children,
}: WeatherContextProviderProps) {

    const [backgroundImage, setBackgroundImage] = useState('')
    const [location, setLocation] = useState<Location | null>(null)

    return (
        <WeatherContext.Provider
            value={{ backgroundImage, setBackgroundImage, location, setLocation }}
        >
            {children}
        </WeatherContext.Provider>
    )
}