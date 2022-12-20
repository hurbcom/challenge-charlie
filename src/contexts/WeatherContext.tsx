import React, {
    createContext,
    ReactNode,
    useState,
    useContext
} from 'react'

export interface Location {
    lat: number
    lon: number
}

export interface WeatherInformations {
    city: string,
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
    setWeatherInformations: React.Dispatch<React.SetStateAction<WeatherInformations>>,
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    isFahrenheit: boolean
    setIsFahrenheit: React.Dispatch<React.SetStateAction<boolean>>
}

export const WeatherContext = createContext({} as WeatherContextType)

export interface WeatherContextProviderProps {
    children: ReactNode
}

export function WeatherContextProvider({
    children,
}: WeatherContextProviderProps) {

    const [location, setLocation] = useState<Location | null>(null)
    const [loading, setLoading] = useState(false)
    const [backgroundImage, setBackgroundImage] = useState('')
    const [weatherInformations, setWeatherInformations] = useState<WeatherInformations | null>(null)
    const [isFahrenheit, setIsFahrenheit] = useState(false)

    return (
        <WeatherContext.Provider
            value={
                {
                    backgroundImage,
                    setBackgroundImage,
                    location,
                    setLocation,
                    weatherInformations,
                    setWeatherInformations,
                    loading,
                    setLoading,
                    isFahrenheit,
                    setIsFahrenheit
                }
            }
        >
            {children}
        </WeatherContext.Provider>
    )
}

export const useWeatherContext = () => useContext(WeatherContext);