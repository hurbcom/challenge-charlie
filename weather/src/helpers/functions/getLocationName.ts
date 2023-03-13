import axios from "axios";

const baseUrl = 'https://api.opencagedata.com/geocode/v1/json?q='
'https://api.opencagedata.com/geocode/v1/json?q='

export const getLocationName = async (lat: number, long: number, signal: AbortSignal) => {
    const { data } = await axios.get(`${baseUrl}${lat}+${long}&key=2774aa3461904937ae07ed5104f78a97&language=pt-BR&limit=1&no_dedupe=1&no_annotations=1&bounds=${lat}+${long}&abbrv=1`, {
        signal: signal
    });

    return data;
}