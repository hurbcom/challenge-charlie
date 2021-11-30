import 'regenerator-runtime/runtime';
import appStore from '@/store/modules/app';

let url = '';
let mockError = false;

const commit = jest.fn();
const imageUrl = '/image-url.jpg';

jest.mock('axios', () => ({
    get: (_url) => {
        return new Promise((resolve) => {
            if (mockError) {
                throw new Error('Failed to get the background image.');
            }

            url = _url;

            resolve({
                data: {
                    images: [
                        { url: imageUrl }
                    ]
                }
            });
        });
    }
}));

describe('Store app', () => {
    describe('getters', () => {
        test('validating backgroundImageUrl with no image', () => {
            const image = appStore.getters.backgroundImageUrl(appStore.state);
            expect(image).toEqual('');
        });

        test('validating backgroundImageUrl with image', async () => {
            appStore.state.urlForBackgroundImage = imageUrl;

            const image = appStore.getters.backgroundImageUrl(appStore.state);

            expect(image).toEqual(`${appStore.state.baseApiImageBackground}${imageUrl}`);
        });
    });

    describe('actions', () => {
        test('validating getImageBackground action', async () => {
            const urlToMatch = `${appStore.state.baseApiImageBackground}/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`;

            await appStore.actions.getImageBackground({ commit, state: appStore.state });

            expect(url).toEqual(urlToMatch);
            expect(commit).toHaveBeenCalledWith('SET_URL_BACKGROUND_IMAGE', `${imageUrl}`);
        });

        test('validating getImageBackground action with error', async () => {
            mockError = true;

            await appStore.actions.getImageBackground({ commit, state: appStore.state });

            expect(commit).toHaveBeenCalledWith('SET_URL_BACKGROUND_IMAGE', '');
        });
    });
});