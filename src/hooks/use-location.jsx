import { getLocation } from "@/services/location";
import React, { useCallback, useEffect, useState } from "react";

const useLocation = () => {
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
        const fetchedLocation = await getLocation(
            coordinates.latitude,
            coordinates.longitude
        );
        setLocation(fetchedLocation);
    }, [coordinates]);

    useEffect(() => {
        handleGetCoordinates();
    }, []);

    useEffect(() => {
        console.log("coordinates:", coordinates);
        if (coordinates) {
            handleGetLocation();
        }
    }, [coordinates]);

    return location;
};

export default useLocation;
