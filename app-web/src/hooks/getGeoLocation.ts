import { useState, useEffect } from 'react';


// Create a hook responsible for retrieving the current location of the browser if allowed by the user.
const useGeoLocation = () => {
    const [latitude, setLatitude] = useState<string>();
    const [longitude, setLongitude] = useState<string>();
    const [permissionDenied, setPermissionDenied] = useState(false);

    useEffect(() => {
        const getLocation = () => {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    function (position) {
                        setLatitude(position.coords.latitude.toString());
                        setLongitude(position.coords.longitude.toString());
                    },
                    function (error) {
                        console.error(error)
                        if (error.code === error.PERMISSION_DENIED) {
                            setPermissionDenied(true);
                        }
                    }
                );
            } else {
                console.log("Geolocalização não é suportada pelo seu navegador.");
            }
        };

        if (permissionDenied === false) {
            getLocation();
        }
    }, [permissionDenied]);

    return { latitude, longitude };
};

export default useGeoLocation;
