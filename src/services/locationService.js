function fetchLocation(latitude, longitude) {
    return new Promise((resolve, reject) => {
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=c63386b4f77e46de817bdf94f552cddf&language=en`)
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
