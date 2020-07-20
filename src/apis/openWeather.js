import axios from "axios";

const openWeatherUrl = "http://api.openweathermap.org/data/2.5";

export default axios.create({
  baseURL: `${openWeatherUrl}`,
});

