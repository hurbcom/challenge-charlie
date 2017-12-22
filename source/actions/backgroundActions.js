import axios from 'axios';
import toastr from 'toastr';

import * as constants from '../constants';

const bingImageArchiveUrl = 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR';
const corsAnyWhere = 'https://cors-anywhere.herokuapp.com/';

const api = axios.create({
    baseURL: `${corsAnyWhere}${bingImageArchiveUrl}`,
});

const loadBackgroundSuccess = (backgroundUrl = '') => {
    return { type: constants.LOAD_BACKGROUND_SUCCESS, backgroundUrl };
};

export const loadBackground = () => {
    return (dispatch) =>
        api.get('/')
            .then(({data}) => {
                const { images } = data;
                const [backgroundImage] = images;
                const backgroundUrl = `https://www.bing.com${backgroundImage.url}`;
                dispatch(loadBackgroundSuccess(backgroundUrl));
            })
            .catch(() => {
                toastr.error(
                    'Ocorreu um erro ao obter a imagem de fundo do Bing');
                dispatch(loadBackgroundSuccess());
            });
};
