
import * as constants from '../constants/image';
import * as imageApi from '../api/bing/bingApi';

const getImageSuccess = (image = '') =>
  ({ type: constants.IMAGE_FETCH_SUCCESS, image });

const getImageFail = () =>
  ({ type: constants.IMAGE_FETCH_FAIL });

export const getBackgroundImage = () => {
  return(dispatch) => {
    return imageApi.getBackgroundImage(location).then(response => {
        return dispatch(getImageSuccess(response));
    }).catch(err => {
        return dispatch(getImageFail());
    })
  }
}