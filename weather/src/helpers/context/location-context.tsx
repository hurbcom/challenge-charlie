import {
    createContext,
    useLayoutEffect,
    useState,
    useContext,
} from "react";
import { useQuery } from "react-query";
import {
    convertToLocation,
    getLocationName,
    getWeather,
    CoordsType,
    notify
} from "../";
import { useDebounceValue } from "../hooks/useDebounceValue";

interface ContextProps {
    children: React.ReactNode
}

type LocationContextType = {
    coords: CoordsType;
    setCoords: React.Dispatch<React.SetStateAction<CoordsType>>;
    location: string;
    setLocation: React.Dispatch<React.SetStateAction<string>>;
    weather: any;
    isLoading: boolean;
    error: any;
}

export const LocationContext = createContext<LocationContextType>({
    coords: {
        lat: 0,
        long: 0
    },
    setCoords: () => { },
    location: '',
    setLocation: () => {},
    weather: '',
    isLoading: false,
    error: '',
});

export const LocationContextProvider = ({ children }: ContextProps) => {
    const [coords, setCoords] = useState<CoordsType>({
        long: 0,
        lat: 0,
    })
    const [location, setLocation] = useState<string>('');
    const debounceLocation = useDebounceValue(location);
    const controller = new AbortController();

    

    //Pegando o tempo
    const { data: weather, refetch, isLoading, error } = useQuery('weather', async () => {
        const weather = await getWeather(coords.lat, coords.long);

        return weather
    });


    //Pegando as coordenadas pela primeira vez
    useLayoutEffect(() => {
        window.navigator.geolocation.getCurrentPosition((position) => {
            setCoords({
                lat: position.coords.latitude,
                long: position.coords.longitude
            });
        })
    }, []);

    //Pegando a cidade/nome da localização padrao
    useLayoutEffect(() => {
        try{
            if(coords.lat !== 0 && coords.long !== 0) {
                const getLocation = async () => {
                    const city = await getLocationName(coords?.lat, coords?.long, controller.signal);
                    setLocation(city?.results[0].formatted);
                }
                getLocation();
            }
            return () => controller.abort("cancel request")
        }catch(error){
            console.log('error getLocation', error)
            notify('erro', 'error')
        }
    }, [coords]);

    useLayoutEffect(() => {
        if (!debounceLocation) return;
        try {
            const getNewCoords = async () => {
                console.log('deb', debounceLocation)
                const coordsByLocationName = await convertToLocation(debounceLocation, controller.signal);
                setCoords({
                    lat: coordsByLocationName?.results[0]?.geometry?.lat,
                    long: coordsByLocationName?.results[0]?.geometry?.lng
                })
                refetch();
            }
            getNewCoords();
            return () => controller.abort("cancel request")
        }catch(error){
            console.log('error convertToLocation', error)
            notify('erro', 'error')
        }
    }, [debounceLocation]);

    return (
        <LocationContext.Provider
            value={{
                coords,
                setCoords,
                location,
                setLocation,
                weather,
                error,
                isLoading
            }}
        >
            {children}
        </LocationContext.Provider>
    )
}


export const useLocation = () => useContext(LocationContext)