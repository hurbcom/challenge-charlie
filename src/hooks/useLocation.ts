import { LocationModel } from '@/domain/models/city';
import { useState, useEffect } from 'react';

function useLocation(): LocationModel {
    const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!navigator.geolocation) {
            setError('Geolocation is not supported by this browser.');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude });
                setLoading(false)
            },
            (error) => {
                setError(`Unable to retrieve your location: ${error.message}`);
                setLoading(false)
            }
        );
    }, []);
    return { location, error, loading };
}

export default useLocation