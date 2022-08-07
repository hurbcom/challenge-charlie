import axios from "axios";
import config from "../config.json";

export class ImageService {
    public static getImage = async () => {
        // Function to get an image from the Bing API image of the day
        // To access documentation https://docs.microsoft.com/en-us/azure/cognitive-services/bing-image-search/bing-image-search-resource-faq for documentation
        try {
            const response = await axios({
                url: "/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR",
                baseURL:
                    process.env.NODE_ENV === "development"
                        ? `${config.proxy}/${config.apis.bing}`
                        : config.apis.bing,
                method: "GET",
            });

            return `${config.apis.bing}${response.data?.images[0].url}`;
        } catch (e) {
            console.log(e);
        }
    };
}
