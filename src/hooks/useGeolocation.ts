import { useEffect, useState } from "react";

export interface LocationProps {
    loaded: boolean
    coordinates?: {
        latitude: number
        longitude: number
    }
    error?: {
        message: string
    }
}

const useGeolocation = () => {
    const [location, setLocation] = useState<LocationProps>({
        loaded: false
    });
    
    const geolocationSuccess = (position: GeolocationPosition) => {
        setLocation({
            loaded: true,
            coordinates: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            }
        });
    };

    const geolocationError = (error: GeolocationPositionError) => {
        setLocation({
            loaded: true,
            error: {
                message: error.message,
            }
        });
    };

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError);
        } else {
            alert("Seu navegador não suporta a geolocalização");
        }
    }, []);

    return location
}

export default useGeolocation;
