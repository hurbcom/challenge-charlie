import axios from "axios";

export class ImageService {
    public static getImage = async () => {
        // Function to get an image from the Bing API image of the day
        // To access documentation https://docs.microsoft.com/en-us/azure/cognitive-services/bing-image-search/bing-image-search-resource-faq for documentation
        try {
            const response = await axios({
                url: "/bingAPI",
                baseURL: process.env.REACT_APP_API_BING_URL,
                method: "GET",
            });

            return `${process.env.REACT_APP_BING_URL}${response.data?.images[0].url}`;
        } catch (error) {
            console.log(error);
        }
    };
}
