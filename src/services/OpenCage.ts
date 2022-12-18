import { api } from "./api";

export const getLocation = (lat: number, long: number) => {
    const API_KEY = "c83c3ef75d6b420d92d420670db63414";
    return api.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${API_KEY}`);
};