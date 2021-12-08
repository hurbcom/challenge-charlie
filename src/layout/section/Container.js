import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { fetchData } from '../../services/Resource';

const useContainer = () => {

    let history = useHistory();

    const OPENCAGE_KEY = process.env.OPENCAGE_KEY;

    const [geolocation, setGeolocation] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            history.push({
                search: `?lat=${position.coords.latitude}&lon=${position.coords.longitude}`
            })
            getPosition(position.coords.latitude, position.coords.longitude);
        });
    }, []);

    const getPosition = async (latitude, longitude) => {
        const { results } = await fetchData(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&lng=pt_br&key=${OPENCAGE_KEY}`);
        setGeolocation({
            latitude,
            longitude,
            city: results[0].components.city,
            state_code: results[0].components.state_code
        })
    };

    return {
        geolocation,
        setGeolocation
    }
};

export default useContainer;