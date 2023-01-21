import axios from "axios";
import ImageBingModel from "./image-bing-model";

/**
 * Retorna a imagem de fundo do Bing
 * @returns - URL da imagem
 */
export default async function getBingImage() {
    return axios.get(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
            "https://www.bing.com/HPImageArchive.aspx?format=js&n=1"
        )}`
    ).then(async (response) => {
        if (response.data) {
            const imageResult: ImageBingModel = JSON.parse(response.data.contents);
            return `https://www.bing.com` + imageResult.images[0].url;
        }
    });
}
