import axios from "axios";

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
        `${process.env.OPENWEATHERMAP_API}?APPID=${process.env.OPENWEATHERMAP_KEY}&exclude=${exclude}&lang=${linguage}&lat=${lat}&lon=${lng}`
    );
}
