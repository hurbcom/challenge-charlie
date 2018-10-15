import axios from 'axios';
import { LOAD_BING_IMAGE } from 'store/constants';
import { env } from 'helper';


// ====================================================================
// Typed actions
// ====================================================================

const loadImage = url => ({
  type: LOAD_BING_IMAGE,
  value: {
    url,
  },
});

// ====================================================================
// Functions actions
// ====================================================================

export const getBingImage = () => (dispatch) => {
  const {
    REACT_APP_BING_HOST: host,
    REACT_APP_CHALLANGE_BRAVO_API_BING: bingApi,
    REACT_APP_CHALLANGE_BRAVO_API_BING_TIMEOUT: timeout,
  } = env;
  const configRequest = {
    timeout: Number(timeout),
  };
  return axios.get(bingApi, configRequest)
    .then(({ data }) => data)
    .then((data) => {
      try {
        const uri = data.images[0].url;
        const imageUrl = `${host}${uri}`;
        dispatch(loadImage(imageUrl));
        return imageUrl;
      } catch (err) {
        throw err;
      }
    });
};

export const getUnsplashImage = () => (dispatch) => {
  const {
    REACT_APP_SOURCE_UNSPLASH_API: url,
  } = env;
  dispatch(loadImage(url));
};
