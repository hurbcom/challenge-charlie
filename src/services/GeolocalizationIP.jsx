import axios from "axios";

export const GeolocalizationIP = () => {
  const API_KEY = "50ad4a90-fd5e-11ec-b463-1717be8c9ff1";
  return axios.create({
    baseURL: `https://geolocation-db.com/json/${API_KEY}/`,
  });
};
