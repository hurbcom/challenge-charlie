import axios from "axios";

const openCageUrl = "https://api.opencagedata.com/geocode/v1/json";

export default axios.create({
  baseURL: `${openCageUrl}`,
});
