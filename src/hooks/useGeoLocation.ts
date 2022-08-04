import  { useState, useEffect, useMemo } from "react";

const GetGeoLocation = () => {
    const [location, setLocation] = useState<IGeoLocation>({
        loaded: false,
        coordinates: { lat: "", lng: "" },
    });

    const onSuccess = (location:any) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
        });
    };

    const onError = (error:any) => {
        setLocation({
            loaded: true,
            error: {
                code: error?.code,
                message: error?.message,
            },
        });
    };

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported",
            });
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);

    return location;
};

export default GetGeoLocation;

export const useGeoLocation = () => {    
    return useMemo(() => GetGeoLocation(), []);
}