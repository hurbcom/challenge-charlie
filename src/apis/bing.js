import axios from "axios";

const bingUrl =
  "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR";
const corsAnyWhere = "https://cors-anywhere.herokuapp.com/";

export default axios.create({
  baseURL: `${corsAnyWhere}${bingUrl}`,
});
