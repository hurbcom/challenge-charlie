import axios from "axios";

const fetchAxios = (url: string) => {
  return axios.get(url).then((response) => response.data);
};

export { fetchAxios };
