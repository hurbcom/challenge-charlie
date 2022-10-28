import axios from "axios";

const BingAPI = axios.create({
  baseURL: "/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR",
});

export default BingAPI;
