import axios from "axios";
import { LatLongType } from "../providers/location";

export const getLatLongFromAPI = async (
    address: string
): Promise<LatLongType> => {
    try {
        const baseUrl = "https://api.opencagedata.com/geocode/v1/json";
        const { data } = await axios.get(baseUrl, {
            params: {
                q: address,
                key: process.env.REACT_APP_OPENCAGE_KEY,
            },
        });
        const latitude = data.results[0].geometry.lat;
        const longitude = data.results[0].geometry.lng;
        return { latitude, longitude };
    } catch (error) {
        throw new Error("Falha ao consultar API");
    }
};
