import axios, { AxiosError } from "axios"
import { notify } from "./notify";

const baseUrl = 'https://api.openweathermap.org/data/2.5/onecall?';
const apiKey = import.meta.env.VITE_WEATHER_API_KEY || '772920597e4ec8f00de8d376dfb3f094';

export const getWeather = async (lat: number, long: number) => {
    try{
        const { data } = await axios.get(`${baseUrl}lat=${lat}&lon=${long}&exclude=minutely,hourly,alerts&appid=${apiKey}&lang=pt_br&units=metric`);

        return data;
    }catch(error: any){
        console.log('erroeraas', error)
        notify(error.response.data.message, 'error')
    }
}