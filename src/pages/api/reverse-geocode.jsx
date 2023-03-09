const getCityFromCoords = async (req, res) => {
    const API_KEY = "6fadb7c6163e4493accb6f2354d09dcb";
    const latitude = -22.9933056;
    const longitude = -43.2308224;

    const openCageUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}&pretty=1`;

    const city = await fetch(openCageUrl)
        .then((r) => r.json())
        .then((cityResponse) => ({
            ...cityResponse.results[0].components,
            formatted: cityResponse.results[0].formatted,
        }));

    return res.status(200).send(city);
};

export default getCityFromCoords;
