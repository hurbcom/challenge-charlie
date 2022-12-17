import { api } from "./api";

const getWallpaper = async () => {
    return await api.get('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR')
}

export { getWallpaper };