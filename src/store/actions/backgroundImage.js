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
    REACT_APP_BING_HOST,
    REACT_APP_CHALLANGE_BRAVO_API_BING,
    REACT_APP_CHALLANGE_BRAVO_API_BING_TIMEOUT,
  } = env;
  const configRequest = {
    timeout: Number(REACT_APP_CHALLANGE_BRAVO_API_BING_TIMEOUT),
  };
  return axios.get(REACT_APP_CHALLANGE_BRAVO_API_BING, configRequest)
    .then(({ data }) => data)
    .then((data) => {
      try {
        const uri = data.images[0].url;
        const imageUrl = `${REACT_APP_BING_HOST}${uri}`;
        dispatch(loadImage(imageUrl));
        return imageUrl;
      } catch (err) {
        throw err;
      }
    });
};
