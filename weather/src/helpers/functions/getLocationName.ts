import axios from "axios";

const baseUrl = 'https://api.opencagedata.com/geocode/v1/json?q='
'https://api.opencagedata.com/geocode/v1/json?q='

export const getLocationName = async (lat: number, long: number) => {
    const { data } = await axios.get(`${baseUrl}${lat}+${long}&key=2774aa3461904937ae07ed5104f78a97&language=en&address_only=1&limit=1`);

    return data;
}