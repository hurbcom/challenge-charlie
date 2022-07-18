import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

export const getWeather = async (params) => {
  console.log(process.env.REACT_APP_API_KEY);
  try {
    const placeReponse = await api.get("weather", {
      params: {
        ...params,
        lang: "pt_BR",
        appid: process.env.REACT_APP_API_KEY,
        units: "metric",
      },
    });
    const { coord, name } = placeReponse.data;
    const forecastReponse = await api.get("onecall", {
      params: {
        ...coord,
        lang: "pt_BR",
        appid: process.env.REACT_APP_API_KEY,
        units: "metric",
        exclude: "hourly,minutely",
      },
    });
    return { ...forecastReponse.data, name, coord };
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export default api;
