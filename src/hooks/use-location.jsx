import { getCoordinates, getLocation } from "@/services/location";
import { WeatherContext } from "@/utils/weather-context";
import React, { useCallback, useContext, useEffect, useState } from "react";

const useLocation = () => {
    const [coordinates, setCoordinates] = useState(null);
    const [geolocation, setGeolocation] = useState(null);

    const { setCity } = useContext(WeatherContext);

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
        const coords = await getCoordinates(locationName);
        setCity(coords.locationName);
        return {
            lat: coords.latitude,
            lon: coords.longitude,
        };
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
