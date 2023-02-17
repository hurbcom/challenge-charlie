import axios from "axios";
import { filterNextDays } from '../utils/dates'

const APP_OPEN_WEATHER_KEY = '772920597e4ec8f00de8d376dfb3f094';
export const getToday = (city) => {
   return axios.get(`http://api.openweathermap.org/data/2.5/weather`, {
    params: {
        q: city,
        APPID: APP_OPEN_WEATHER_KEY,
        lang: "pt_br",
        units: 'metric'
    }
   })
   .then(response => {
    return response.data
   })
   .catch(err =>  console.log(err))
}
export const getNextDays = (city) => {
    return axios.get(`http://api.openweathermap.org/data/2.5/forecast/`, {
    params: {
        q: city,
        APPID: APP_OPEN_WEATHER_KEY,
        lang: "pt_br",
        units: 'metric'
    }
    })
   .then(response => {
    return filterNextDays(response.data.list)
   })
   .catch(err =>  console.log(err))
}

export const getByLocation = (latitude, longitude) => {
    const APP_OPEN_CAGE_KEY = 'c63386b4f77e46de817bdf94f552cddf';
    
    return axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${APP_OPEN_CAGE_KEY}&language=en`)
   .then(response => {
    return response.data.results[0].components.state
   })
   .catch(err =>  console.log(err))
}

export const  getLocation = () => {
    if (!navigator.geolocation) {
      console.log('Geolocalização não é suportada pelo seu navegador');
    } else {
      const position = new Promise((resolve) => {
        return navigator.geolocation.getCurrentPosition((position) => {
          const latitude  = position.coords.latitude;
          const longitude = position.coords.longitude;
          resolve({ latitude, longitude });
        });
      })
      .catch((err) => console.log(err));
      return position;
    }
  }