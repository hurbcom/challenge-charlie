import axios from "axios";

export const OpenCageAPI = (lat, long) => {
  const API_KEY = "1fc31c1259e54c4f9fee85df8c196628";
  return axios.create({
    baseURL: `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${API_KEY}`,
  });
};
