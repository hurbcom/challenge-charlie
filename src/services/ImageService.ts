import { apiInstance } from 'services/ConfigService';

class ImageService {
    public static getImageFromBing = async () => {
        try {
            const response = (await apiInstance.get(
                'https://cors-anywhere.herokuapp.com/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR'
            )) as any;

            const { images } = response.data;
            if (images[0]?.url) return `https://www.bing.com${images[0].url}`;
            return undefined;
        } catch (exception) {
            console.error(exception);
            return undefined;
        }
    };
}

export default ImageService;
