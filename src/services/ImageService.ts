import { apiInstance } from 'services/ConfigService';
import CacheService from 'services/CacheService';

class ImageService {
    private static bgImageKey = 'BG_IMAGE';

    public static getImageFromBing = async () => {
        try {
            const cachedImage = CacheService.getCookie(this.bgImageKey);
            if (cachedImage.length <= 0) {
                const response = (await apiInstance.get(
                    'https://fran-bing-proxy.herokuapp.com/'
                )) as any;

                const { code, message } = response.data;
                if (code === 1) {
                    CacheService.setCookie(this.bgImageKey, message, 120);
                    return message;
                }
            } else {
                return cachedImage;
            }

            return undefined;
        } catch (exception) {
            console.error(exception);
            return undefined;
        }
    };
}

export default ImageService;
