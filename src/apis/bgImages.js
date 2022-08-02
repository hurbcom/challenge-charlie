import config from "../config.json";
import axios from "axios";
export async function getBackground() {
    try {
        const res = await axios({
            url: "/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR",
            baseURL: `${config.proxy}/${config.apis.bing}`,
            method: "GET",
        });

        return `${config.apis.bing}${res.data?.images[0].url}`;
    } catch (e) {
        console.log(e);
        return "";
    }
}
