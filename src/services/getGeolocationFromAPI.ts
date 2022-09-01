import axios from "axios";
import { LatLongType } from "../providers/location";

type APIResponse = {
    results: {
        components: {
            country: string | null;
            state: string | null;
            suburb: string | null;
            city: string | null;
        };
    }[];
};

export const getGeolocationFromAPI = async ({
    latitude,
    longitude,
}: LatLongType): Promise<APIResponse> => {
    try {
        const baseUrl = `https://api.opencagedata.com/geocode/v1/json`;
        const { data } = await axios.get(baseUrl, {
            params: {
                q: `${latitude}+${longitude}`,
                key: process.env.REACT_APP_OPENCAGE_KEY,
            },
        });
        return data;
    } catch (err) {
        throw new Error("Falha ao consultar API");
    }
};
