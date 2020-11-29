import React, { createContext, useCallback, useState, useContext } from "react";
import axios from "axios";

// Instantiating the context
const GeoContext = createContext({});

// The creation of variables and functions for the context.
export const GeoProvider = ({ children }) => {
    const [locationString, setLocationString] = useState();
    const [loading, setLoading] = useState(true);
    const [lat, setLat] = useState();
    const [long, setLong] = useState();
    const geo = navigator.geolocation;

    // Callback function to handle with the success of the getCurrentPosition from the nav.
    const onSuccess = useCallback(
        (position) => {
            axios
                .get(
                    `https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude},${position.coords.longitude}&key=c63386b4f77e46de817bdf94f552cddf&language=en`
                )
                .then((response) => {
                    setLocationString(
                        `${response.data.results[0].components.city}, ${response.data.results[0].components.state}`
                    );
                    setLat(position.coords.latitude);
                    setLong(position.coords.longitude);
                    setLoading(false);
                });
        },
        [setLocationString]
    );

    // Callback function to handle with the failure of the getCurrentPosition from the nav.
    const onFailure = useCallback(() => {
        setLocationString("");
        setLoading(false);
    }, [setLocationString]);

    const getUserCurrentLocation = useCallback(async () => {
        setLoading(true);
        if (!geo) {
            setLocationString("");
            setLoading(false);
        } else {
            geo.getCurrentPosition(onSuccess, onFailure);
            setLoading(false);
        }
    }, []);

    const getInputLocation = useCallback(async (string) => {
        setLoading(true);
        const response = await axios.get(
            `https://api.opencagedata.com/geocode/v1/json?q=${string}&key=c63386b4f77e46de817bdf94f552cddf&language=en`
        );
        if (
            !response.data.results ||
            !response.data.results[0] ||
            !response.data.results[0].components ||
            !response.data.results[0].components.city
        ) {
            setLocationString("Cidade inválida");
            setLat(null);
            setLong(null);
            setLoading(false);
        } else {
            if (!response.data.results[0].components.state) {
                setLocationString(
                    `${response.data.results[0].components.city}, ${response.data.results[0].components.country}`
                );
            } else {
                setLocationString(
                    `${response.data.results[0].components.city}, ${response.data.results[0].components.state}`
                );
            }
            setLat(response.data.results[0].geometry.lat);
            setLong(response.data.results[0].geometry.lng);
        }
        setLoading(false);
    });

    return (
        <GeoContext.Provider
            value={{
                getUserCurrentLocation,
                getInputLocation,
                locationString,
                loading,
                lat,
                long,
            }}
        >
            {children}
        </GeoContext.Provider>
    );
};

export function useGeo() {
    const context = useContext(GeoContext);
    if (!context) {
        throw new Error("useGeo is missing");
    }
    return context;
}
