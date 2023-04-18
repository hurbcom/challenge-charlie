import { useCallback, useEffect, useState } from "react";


const useGeolocation = () => {
    const [coords, setCoords] = useState<undefined | Pick<GeolocationPosition, "coords">>();
    const [error, setError] = useState<string | null>(null);

    const onChange = useCallback(({ coords }: GeolocationPosition) => {
        setCoords({ coords })
    }, []);

    const onError = (error: GeolocationPositionError) => {
        setError(error.message);
    }

    useEffect(() => {
        if (!navigator || !navigator.geolocation) {
            setError("Geolocation isn't supported on this device.");
            return;
        }


        const getLocation = async () => {
            await navigator.geolocation.getCurrentPosition(onChange, onError);
        };

        getLocation();

    }, []);

    return {
        ...coords,
        error
    };
};

export default useGeolocation;
