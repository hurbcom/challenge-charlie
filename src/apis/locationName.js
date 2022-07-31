import config from "../config.json";
import axios from "axios";
export async function getLocationName({ latitude, longitude }) {
    try {
        const res = await axios({
            baseURL: `${config.apis.locationName}`,
            method: "GET",
            params: {
                q: `${latitude}, ${longitude}`,
                key: process.env.REACT_APP_LOCATION_NAME_KEY,
                language: "en",
            },
        });

        return res.data.results[0].components;
    } catch (e) {
        console.log(e);
        return Promise.reject();
    }
}
