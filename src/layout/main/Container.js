import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { getLocation } from '../../utils';
import { fetchData } from '../../services/Resource';

const useContainer = () => {

    let history = useHistory();

    const OPENCAGE_KEY = process.env.OPENCAGE_KEY;
    const OPENCAGE_URI = 'https://api.opencagedata.com/geocode/v1/json';

    const { lat, lng } = getLocation();

    const [geolocation, setGeolocation] = useState(null);

    useEffect(() => {
        if (lat || lng) {
            getPosition(lat, lng);
        } else {
            navigator.geolocation.getCurrentPosition(position => {
                getPosition(position.coords.latitude, position.coords.longitude);
            });
        }
    }, []);

    const getPosition = async (lat, lng) => {
        const { results } = await fetchData(`${OPENCAGE_URI}?q=${lat}+${lng}&lng=pt_br&key=${OPENCAGE_KEY}`);

        history.push({
            search: `?lat=${lat}&lng=${lng}`
        });

        setGeolocation({
            lat: parseInt(lat),
            lng: parseInt(lng),
            city: results[0].components.city,
            state_code: results[0].components.state_code,
            country: results[0].components.country,
            state: results[0].components.state
        });
    };

    return {
        geolocation
    }
};

export default useContainer;