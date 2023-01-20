import axios from "axios";

const URL = "http://api.openweathermap.org/data/2.5/forecast";
const key = "772920597e4ec8f00de8d376dfb3f094";
const exclude = "hourly,current,minutely,alerts";
const linguage = "pt";

/**
 * Requisição para a API Open Weather Map
 * @param lat - Latitude
 * @param lng - Longitude
 * @returns - requisição
 */
export default function getForecast(lat: string, lng: string) {
    return axios.get(
        `${URL}?APPID=${key}&exclude=${exclude}&lang=${linguage}&lat=${lat}&lon=${lng}`
    );
}
