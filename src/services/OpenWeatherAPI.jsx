import axios from "axios";

const OpenWeatherAPI = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});
//Chmamada do link pós o baseURL
//weather?lat={lat}&lon={lon}&appid={API key}
export default OpenWeatherAPI;
