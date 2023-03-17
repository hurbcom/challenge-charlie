import { getCoordinates, getLocation } from "@/services/location";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

const useLocation = () => {
    const [coordinates, setCoordinates] = useState(null);
    const [geolocation, setGeolocation] = useState(null);

    const handleGetLocation = async () => {
        if (!geolocation && coordinates) {
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
    };

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

    const handleGeolocationSuccess = useCallback(
        (position) => {
            if (!coordinates) {
                const { latitude, longitude } = position.coords;
                setCoordinates({ latitude, longitude });
            }
        },
        [coordinates]
    );

    const handleGeolocationError = (error) => {
        console.error("Não foi possível encontrar a sua localização.");
    };

    useEffect(() => {
        let watchId;
        if (!navigator.geolocation) {
            console.error("Geolocalização não suportada pelo seu navegador.");
            return;
        }

        watchId = navigator.geolocation.watchPosition(
            handleGeolocationSuccess,
            handleGeolocationError
        );

        return () => {
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);

    useEffect(() => {
        if (coordinates) {
            handleGetLocation();
        }
    }, [coordinates]);

    return { geolocation, handleGetCityCoordinates };
};

export default useLocation;
