const getCoordsFromCity = async (req, res) => {
    if (req.method !== "GET") {
        return res.status(405).send({ error: "Method not allowed" });
    }

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
                const countryName = cityResponse.results[0].components.country;
                let locationName = countryName;
                if (cityName && stateName) {
                    locationName = `${cityName}, ${stateName}`;
                } else if (cityName) {
                    locationName = cityName + ", " + locationName;
                } else if (stateName) {
                    locationName = stateName + ", " + locationName;
                }
                const { lat, lng } = cityResponse.results[0].geometry;
                const result = {
                    locationName,
                    latitude: lat,
                    longitude: lng,
                };
                return result;
            }
        });

    return res.status(200).send(coords);
};

export default getCoordsFromCity;
