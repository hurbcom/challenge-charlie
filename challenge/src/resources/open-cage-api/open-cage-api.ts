import axios from "axios";

const URL = "https://api.opencagedata.com/geocode/v1/json";
const key = "c63386b4f77e46de817bdf94f552cddf";
const linguage = "pt";

/**
 * Requisição para a API Open Cage API
 * @param coordinates - coordenadas
 * @returns - requisição
 */
export default function getOpenCageAPI(coordinates: string) {
    return axios.get(`${URL}?key=${key}&q=${coordinates}&language=${linguage}`);
}
