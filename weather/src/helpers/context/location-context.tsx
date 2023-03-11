import {
    createContext,
    useLayoutEffect,
    useState,
    useContext,
    useEffect,
    useRef
} from "react";
import { useQuery } from "react-query";
import {
    convertToLocation,
    getLocationName,
    getWeather,
    CoordsType
} from "../";

interface ContextProps {
    children: React.ReactNode
}

type LocationContextType = {
    coords: CoordsType;
    setCoords: React.Dispatch<React.SetStateAction<CoordsType>>;
    location: string;
    handleChangeLocation: (e:  React.ChangeEvent<HTMLInputElement>) => void;
    weather: any;
    isLoading: boolean;
}

export const LocationContext = createContext<LocationContextType>({
    coords: {
        lat: 0,
        long: 0
    },
    setCoords: () => { },
    location: '',
    handleChangeLocation: () => {},
    weather: '',
    isLoading: false,
});

export const LocationContextProvider = ({ children }: ContextProps) => {
    const [coords, setCoords] = useState<CoordsType>({
        long: 0,
        lat: 0,
    })
    // const [location, setLocation] = useState<string>('');

    const coordsRef = useRef(null);

    //Pegando as coordenadas pela primeira vez
    useLayoutEffect(() => {
        window.navigator.geolocation.getCurrentPosition((position) => {
            setCoords({
                lat: position.coords.latitude,
                long: position.coords.longitude
            })
        })
    }, [])

    //Pegando o tempo
    const { data: weather, refetch, isLoading } = useQuery('weather', async () => {
        const weather = await getWeather(coords.lat, coords.long);

        return weather
    }, { enabled: false })

    //Pegando a cidade/nome da localização
    const { data: city} = useQuery('city', async () => {
        const city = await getLocationName(coords.lat, coords.long);

        return city?.results[0].formatted;
    })
    console.log('city', city)

    const { data: convert, isLoading: loading } = useQuery('conver', async () => {
        const coordsByLocationName = await convertToLocation(city);
        setCoords({
            lat: coordsByLocationName?.results[0]?.geometry?.lat,
            long: coordsByLocationName?.results[0]?.geometry?.long
        })

        return coordsByLocationName;
    })


    const handleChangeLocation = (e:  React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
    }

    useEffect(() => {
        if (coords.lat !== 0 && coords.long !== 0) {
            refetch();
        };
    }, [coords]);

    return (
        <LocationContext.Provider
            value={{
                coords,
                setCoords,
                location: city,
                handleChangeLocation,
                weather,
                isLoading
            }}
        >
            {children}
        </LocationContext.Provider>
    )
}


export const useLocation = () => useContext(LocationContext)