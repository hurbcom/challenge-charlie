const getCoordsFromCity = async (req, res) => {
    const API_KEY = "6fadb7c6163e4493accb6f2354d09dcb";
    const { city } = req.query;

    const openCageUrl = encodeURI(
        `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${API_KEY}`
    );

    const coords = await fetch(openCageUrl)
        .then((r) => r.json())
        .then((cityResponse) => {
            if (cityResponse?.results.length > 0) {
                const cityName = cityResponse.results[0].components.city;
                const stateName = cityResponse.results[0].components.state;
                const { lat, lng } = cityResponse.results[0].geometry;
                const result = {
                    locationName: `${cityName}, ${stateName}`,
                    latitude: lat,
                    longitude: lng,
                };
                return result;
            }
        });

    return res.status(200).send(coords);
};

export default getCoordsFromCity;
