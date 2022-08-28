import axios from "axios";

export const getBackgroundFromAPI = async (): Promise<string> => {
    const proxyUrl = "https://api.allorigins.win/get?url=";
    const baseUrl = `https://www.bing.com/`;
    const apiImagesPath = "HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR";
    const { data } = await axios.get(
        `${proxyUrl}${encodeURIComponent(baseUrl + apiImagesPath)}`
    );
    const responseDecoded = JSON.parse(data.contents);
    try {
        const imagePath = responseDecoded.images[0].url;
        return baseUrl + imagePath;
    } catch (error) {
        return "";
    }
};
