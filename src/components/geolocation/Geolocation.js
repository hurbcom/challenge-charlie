import { useEffect, useState } from 'react'; 
const { REACT_APP_API_KEY_CURRENT_POSITION } = process.env;

export const Geolocation = () => {
    
    //UseState is used so that state variables are preserved.
    const [position, setPosition] = useState({});
    const [error, setError] = useState(null);

    const onChange = ({ coords }) => {
        //access key for Opencagedata API
        let apiKey = REACT_APP_API_KEY_CURRENT_POSITION;
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${coords.latitude}+${coords.longitude}&key=${apiKey}`)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error("Unable to fetch data");
                }
            }).then(data => {
                setPosition({
                    position: data.results[0].components.state,
                    render: true
                });
            })
            .catch(err => {
                setPosition({
                    position: {},
                    render: false
                })
                console.log('erro', err);
            });
    };

    const onError = (error) => {
        setError(error.message);
    };

    useEffect(() => {
        const geo = navigator.geolocation;
        if(!geo){
            setError('Geolocation is not supported');
            return;
        }
        /**
         * It works to register a handler function that will
         * be called automatically each time the position of
         * the device changes. The onError is an error handling
         * callback function.
         */
        let watcher = geo.watchPosition(onChange, onError);
        /**
         * watcher variable is an ID integer that identifies the registered handler 
         * It is passed to the clearWatch function to undergister the handler
         */
        return () => geo.clearWatch(watcher);
    }, [])

    return {position, error};
}
