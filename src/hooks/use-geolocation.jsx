import { getLocation } from "@/services/location";
import React, { useCallback, useEffect, useState } from "react";

const useGeolocation = () => {
    const [coordinates, setCoordinates] = useState(null);
    const [location, setLocation] = useState(null);

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
        if (!location) {
            const fetchedLocation = await getLocation(
                coordinates.latitude,
                coordinates.longitude
            );
            const locationWithCoordinates = {
                ...fetchedLocation,
                latitude: coordinates.latitude,
                longitude: coordinates.longitude,
            };
            setLocation(locationWithCoordinates);
        }
    }, [coordinates]);

    useEffect(() => {
        handleGetCoordinates();
    }, []);

    useEffect(() => {
        if (coordinates) {
            handleGetLocation();
        }
    }, [coordinates]);

    return location;
};

export default useGeolocation;
