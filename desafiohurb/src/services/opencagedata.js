import axios from "axios";

const openCageKey = "37f8ef7f6f0f4c18bc55e754699aca4e";

const openCageApi = axios.create({
    baseURL: "https://api.opencagedata.com/geocode/v1",
});

export const OpenCageService = {
    async getCityByLongitude(coords) {
        const response = await openCageApi.get(`/json?key=${openCageKey}&q=${encodeURIComponent(coords.latitude + ',' + coords.longitude)}&pretty=1&no_annotations=1`);
        return response.data.results[0].components.city;
    }
};

