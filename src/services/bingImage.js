import axios from "axios";

const CORS_proxy = "https://cors-anywhere.herokuapp.com/";

const bingURL = "https://www.bing.com";

export const fetchBingImage = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(
                `${CORS_proxy}${bingURL}/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`
            );

            resolve(bingURL + response.data.images[0].url);
        } catch (error) {
            reject(error);
        }
    });
};
