const getCityFromCoords = async (req, res) => {
    if (req.method !== "GET") {
        return res.status(405).send({ error: "Method not allowed" });
    }

    const API_KEY = process.env.OPEN_CAGE_API_KEY;
    const { lat, lng } = req.query;

    if (!lat || !lng) {
        return res
            .status(400)
            .send({ error: "Latitude and/or longitude not specified" });
    }

    const openCageUrl = encodeURI(
        `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${API_KEY}&pretty=1`
    );

    const city = await fetch(openCageUrl)
        .then((r) => r.json())
        .then((cityResponse) => ({
            ...cityResponse.results[0].components,
            formatted: cityResponse.results[0].formatted,
        }));

    return res.status(200).send(city);
};

export default getCityFromCoords;
