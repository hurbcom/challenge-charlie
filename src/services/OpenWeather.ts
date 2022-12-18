import { api } from './api'


const API_KEY = '772920597e4ec8f00de8d376dfb3f094'

export const OpenWeather = (city: string) => {
    return api.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`)

};