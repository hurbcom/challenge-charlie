import axios from 'axios';

const app = {
    namespaced: true,
    state: {
        baseApiImageBackground: 'http://www.bing.com',
        urlForBackgroundImage: '',
    },
    getters: {
        backgroundImageUrl(state) {
            if (state.urlForBackgroundImage !== '') {
                return `${state.baseApiImageBackground}${state.urlForBackgroundImage}`;
            }

            return '';
        },
    },
    mutations: {
        SET_URL_BACKGROUND_IMAGE(state, payload) {
            state.urlForBackgroundImage = payload;
        },
    },
    actions: {
        async getImageBackground({ commit, state }) {
            try {
                const apiUrl = `${state.baseApiImageBackground}/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`;

                const { data: { images } } = await axios.get(apiUrl);
                const { url } = images[0];

                commit('SET_URL_BACKGROUND_IMAGE', `${url}`);
            } catch (_) {
                commit('SET_URL_BACKGROUND_IMAGE', '');
            }
        },
    }
};
export default app;