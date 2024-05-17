import axios from "axios";

export const openCage = axios.create({
    baseURL: "https://api.opencagedata.com/geocode/v1/",
});

export const openCageKey = "ea8ffe2a026b4daa9607cc6ab6a1940b";
