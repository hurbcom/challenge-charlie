import axios from "axios";
import ImageBingModel from "./image-bing-model";

/**
 * Retorna a imagem de fundo do Bing
 * @returns - URL da imagem
 */
export default async function getBingImage() {
    return axios.get(
        `${process.env.ALLOWORIGIN_API}?url=${encodeURIComponent(
            process.env.BING_API
        )}`
    ).then(async (response) => {
        if (response.data) {
            const imageResult: ImageBingModel = JSON.parse(response.data.contents);
            return process.env.BING_WEBSITE + imageResult.images[0].url;
        }
    });
}
