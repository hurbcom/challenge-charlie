import axios from 'axios';
import { useEffect, useState } from "react";
import { LocationProps } from './useGeolocation';

export interface TownProps {
    loaded: boolean
    description?: {
        town: string
        state: string
    }
    error?: {
        message: string
    }
}

const useReverseGeocoding = (location: LocationProps) => {
    const [town, setTown] = useState<TownProps>({
        loaded: false
    });

    useEffect(() => {
        if (location.loaded) {
            if(location.coordinates) {
                axios.get(
                    "https://api.opencagedata.com/geocode/v1/json", {
                        params: {
                            q: `${location.coordinates.latitude}+${location.coordinates.longitude}`,
                            key: import.meta.env.VITE_API_KEY_OPEN_CAGE,
                            language: navigator.language
                        }
                    }
                )
                    .then((response) => {
                        setTown({
                            loaded: true,
                            description: {
                                town: (response.data.results[0].components.town || response.data.results[0].components.city || response.data.results[0].components.village),
                                state: (response.data.results[0].components.state || response.data.results[0].components.county),
                            }
                        });
                    })
                    .catch((error) => {
                        setTown({
                            loaded: false,
                            error: {
                                message: error.message,
                            }
                        });
                    });
            } else {
                alert(location.error?.message);
            }
        } else {
            setTown({
                loaded: false
            });
        }
    }, [location]);

    return town;
};

export default useReverseGeocoding;
