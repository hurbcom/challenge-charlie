function fetchLocation(latitude, longitude) {
    return new Promise((resolve, reject) => {
        const params = {
            q: `${latitude},${longitude}`,
            key: process.env.REACT_APP_LOCATION_APIKEY,
            language: 'pt',
        };

        fetch(`/geocode/v1/json?${new URLSearchParams(params).toString()}`)
            .then((response) => response.json())
            .then((json) => {
                const { city, state_code: stateCode, country } = json.results[0].components;
                resolve([city, stateCode, country].filter((item) => item).join(', '));
            })
            .catch((error) => reject(error));
    });
}

export default {
    fetchLocation,
};
