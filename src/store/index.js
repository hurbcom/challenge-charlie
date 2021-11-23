import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import search from './modules/search';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        baseApiImageBackground: 'http://www.bing.com',
        urlForBackgroundImage: '',
    },
    mutations: {
        SET_URL_BACKGROUND_IMAGE(state, payload) {
            state.urlForBackgroundImage = payload;
        },
    },
    actions: {
        async getImageBackground({ commit, state }) {
            const apiUrl = `${state.baseApiImageBackground}/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`;

            const { data: { images } } = await axios.get(apiUrl);
            const { url } = images[0];

            commit('SET_URL_BACKGROUND_IMAGE', `${state.baseApiImageBackground}${url}`);
        },
    },
    modules: {
        search
    }
});
