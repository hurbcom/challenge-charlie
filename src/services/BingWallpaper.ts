import { api } from "./api";

const BingWallpaper = async () => {

    const corsUrl = "https://api.allorigins.win/get?url=";
    const url = corsUrl + encodeURIComponent("https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR");
    const result = await api.get(url)

    return JSON.parse(result.data.contents)
}

export { BingWallpaper };