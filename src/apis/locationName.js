import config from "../config.json";
import axios from "axios";
export async function getCoordenatesByName(locationName) {
    try {
        const res = await axios({
            baseURL: `${config.apis.locationName}`,
            method: "GET",
            params: {
                q: locationName,
                key: process.env.REACT_APP_LOCATION_NAME_KEY,
                language: "pt_br",
            },
        });
        const {
            components: { city, state },
            geometry: { lat, lng },
        } = await res.data.results[0];

        return { longitude: lng, latitude: lat, city, state };
    } catch (e) {
        console.log(e);
        return Promise.reject();
    }
}
