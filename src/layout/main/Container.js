import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { fetchData } from '../../services/Resource';

const useContainer = () => {

    let history = useHistory();

    const OPENCAGE_KEY = process.env.OPENCAGE_KEY;
    const OPENCAGE_URI = 'https://api.opencagedata.com/geocode/v1/json?';

    const [geolocation, setGeolocation] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            getPosition(position.coords.latitude, position.coords.longitude);
            history.push({
                search: `?lat=${position.coords.latitude}&lon=${position.coords.longitude}`
            })
        });
    }, []);

    const getPosition = async (latitude, longitude, placename) => {
        const query = placename ? (
            `q=${placename}&lng=pt_br&key=${OPENCAGE_KEY}`
        ) : (
            `q=${latitude}+${longitude}&lng=pt_br&key=${OPENCAGE_KEY}`
        );

        const { results } = await fetchData(`${OPENCAGE_URI}${query}`);

        setGeolocation({
            latitude,
            longitude,
            city: results[0].components.city,
            state_code: results[0].components.state_code
        });
    };

    return {
        geolocation
    }
};

export default useContainer;