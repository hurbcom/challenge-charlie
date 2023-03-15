import { getCoordinates, getLocation } from "@/services/location";
import { useCallback, useEffect, useState } from "react";

const useLocation = () => {
    const [coordinates, setCoordinates] = useState(null);
    const [geolocation, setGeolocation] = useState(null);

    const handleGetCoordinates = useCallback(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCoordinates({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error(error);
                }
            );
        }
    }, []);

    const handleGetLocation = useCallback(async () => {
        if (!geolocation) {
            const fetchedLocation = await getLocation(
                coordinates.latitude,
                coordinates.longitude
            );
            const locationWithCoordinates = {
                ...fetchedLocation,
                latitude: coordinates.latitude,
                longitude: coordinates.longitude,
            };
            setGeolocation(locationWithCoordinates);
        }
    }, [coordinates]);

    const handleGetCityCoordinates = async (locationName) => {
        if (locationName.length < 2) {
            throw new Error(
                "Nome da localidade deve ter pelo menos 2 caracteres"
            );
        }
        try {
            const coords = await getCoordinates(locationName);
            return {
                lat: coords.latitude,
                lon: coords.longitude,
                locationName: coords.locationName,
            };
        } catch (error) {
            throw new Error("Localidade inválida. Tente novamente.");
        }
    };

    useEffect(() => {
        handleGetCoordinates();
    }, []);

    useEffect(() => {
        if (coordinates) {
            handleGetLocation();
        }
    }, [coordinates]);

    return { geolocation, handleGetCityCoordinates };
};

export default useLocation;
