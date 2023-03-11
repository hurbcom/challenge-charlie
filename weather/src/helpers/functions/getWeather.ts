import axios from "axios"

const baseUrl = 'https://api.openweathermap.org/data/2.5/onecall?'


export const getWeather = async (lat: number, long: number) => {
    const { data } = await axios.get(`${baseUrl}lat=${lat}&lon=${long}&exclude=minutely,hourly,alerts&appid=772920597e4ec8f00de8d376dfb3f094&lang=pt_br&units=metric`);
    return data;
}