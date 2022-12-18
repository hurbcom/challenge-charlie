import React, {
    createContext,
    ReactNode,
    useState,
} from 'react'

interface Location {
    lat: number
    long: number
}

export interface WeatherInformations {
    today: {
        temp: number
        description: string
        humidity: number
        wind: number
        pressure: number
        icon: string
    },
    tomorrow: {
        tempMax: number
        tempMin: number
        icon: string
    },
    afterTomorrow: {
        tempMax: number
        tempMin: number
        icon: string
    }
}

interface WeatherContextType {
    backgroundImage: string,
    setBackgroundImage: React.Dispatch<React.SetStateAction<string>>,
    location: Location,
    setLocation: React.Dispatch<React.SetStateAction<Location>>,
    weatherInformations: WeatherInformations,
    setWeatherInformations: React.Dispatch<React.SetStateAction<WeatherInformations>>
}

export const WeatherContext = createContext({} as WeatherContextType)

interface WeatherContextProviderProps {
    children: ReactNode
}

export function WeatherContextProvider({
    children,
}: WeatherContextProviderProps) {

    const [location, setLocation] = useState<Location | null>(null)
    const [backgroundImage, setBackgroundImage] = useState('')
    const [weatherInformations, setWeatherInformations] = useState<WeatherInformations | null>(null)

    return (
        <WeatherContext.Provider
            value={{ backgroundImage, setBackgroundImage, location, setLocation, weatherInformations, setWeatherInformations }}
        >
            {children}
        </WeatherContext.Provider>
    )
}