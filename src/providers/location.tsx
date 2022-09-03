import React, { ReactNode, useEffect, useState } from "react";
import { getGeolocationFromAPI } from "../services/getGeolocationFromAPI";
import { useWeather } from "./weather";

type LocationContextType = {
    location: string;
};

export type LatLongType = {
    latitude: number;
    longitude: number;
};

const LocationContext = React.createContext<LocationContextType>(
    {} as LocationContextType
);

export const LocationProvider = ({ children }: { children: ReactNode }) => {
    const [latLong, setLatLong] = useState<LatLongType | null>(null);
    const [location, setLocation] = useState("");
    const { getWeather } = useWeather()

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                ({ coords }: GeolocationPosition) =>
                    setLatLong({
                        latitude: coords.latitude,
                        longitude: coords.longitude,
                    })
            );
        } else {
            console.log("Geolocalização não suportada pelo navegador!");
        }
    }, []);

    useEffect(() => {
        async function getBrowserAddress() {
            if (latLong) {
                const data = await getGeolocationFromAPI(latLong);
                const location = formatApiResponse(data);
                setLocation(location);
            }
        }
        getBrowserAddress();
        getWeather(latLong)
    }, [latLong]);

    return (
        <LocationContext.Provider value={{ location }}>
            {children}
        </LocationContext.Provider>
    );
};

function formatApiResponse(data: any): string {
    const country = data.results[0].components.country || "";
    const state = data.results[0].components.state || "";
    const suburb = data.results[0].components.suburb || "";
    const city = data.results[0].components.city || "";

    if (suburb) return `${suburb}, ${state} - ${country}`;
    if (city) return `$${city}, ${state} - ${country}`;
    return `${state} - ${country}`;
}

export const useLocation = () => React.useContext(LocationContext);
