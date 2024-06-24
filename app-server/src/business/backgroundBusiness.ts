import fetch from 'node-fetch';
import config from '../config/config';

class BackgroundBusiness {
    // Function esponsible for collecting the image of the day from the Bing API. Returns an object with imageUrl containing the image URL.
    async getBackgroundImage() {
        try {
            const response = await fetch(config.BING_API + '/HPImageArchive.aspx?format=js&idx=0&n=1');
            const data = await response.json();
            return {
                // path in the response that stores the image path.
                imageUrl: config.BING_API + data.images[0].url
            };
        } catch (error) {
            console.error('Error fetching background image:', error);
            throw new Error('Failed to fetch background image');
        }
    }
}

export default BackgroundBusiness;
