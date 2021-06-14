import { render } from '@testing-library/react';

import Background from '../../components/Background';
import {
    getImageOfTheDay,
    URL_IMAGE_BING,
} from '../../services/BackgroundImageService';

describe('Testing Background Component', () => {
    const backgroundImage = render(<Background />);

    it('should render correctly', () => {
        expect(backgroundImage);
    });

    beforeEach(() => {
        jest.restoreAllMocks();
    });

    it('should get a url of the image of the background', async () => {
        jest.spyOn(global, 'fetch');
        await getImageOfTheDay();
        expect(global.fetch).toHaveBeenCalledWith(URL_IMAGE_BING, {
            headers: { map: { origin: 'localhost' } },
        });
    });
});
