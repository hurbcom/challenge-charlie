import { createContext, useState, useContext, useEffect } from 'react';
import { geoLocationRequests } from '../services/https/geolocationRequests';

const GeoLocationContext = createContext();

const defaultLocationState = {
    loaded: false,
    coordinates: { latitude: "", longitude: "" },
    state: "",
    stateCode: "",
    error: null
};

export const GeoLocationProvider = ({ children }) => {
    const [location, setLocation] = useState(defaultLocationState);

    const onSuccess = async ({ coords: { latitude, longitude } }) => {
        setLocation(prevState => ({
            ...prevState,
            loaded: true,
            coordinates: { latitude, longitude },
        }));

        try {
            const locationData = await geoLocationRequests(latitude, longitude);
            const { state, state_code } = locationData.results[0].components;

            setLocation(prevState => ({
                ...prevState,
                state,
                stateCode: state_code,
            }));
        } catch (error) {
            setLocation(prevState => ({
                ...prevState,
                error: `Failed to fetch location name: ${error.message}`
            }));
        }
    };

    const onError = ({ message }) => {
        setLocation({
            ...defaultLocationState,
            loaded: true,
            error: message
        });
    };

    useEffect(() => {
        if (!navigator.geolocation) {
            onError({ message: "Geolocation is not supported by your browser." });
        } else {
            navigator.geolocation.getCurrentPosition(onSuccess, onError, { timeout: 20000 });
        }
    }, []);

    return (
        <GeoLocationContext.Provider value={location}>
            {children}
        </GeoLocationContext.Provider>
    );
};

export const useGeoLocation = () => {
    const context = useContext(GeoLocationContext);
    if (context === undefined) {
        throw new Error('useGeoLocation must be used within a GeoLocationProvider');
    }
    return context;
};

export default GeoLocationContext;