import { LOAD_BING_IMAGE } from 'store/constants';


const initialState = '';

const backgroundImageReducer = (state = initialState, action) => {
  const { type, value = {} } = action;
  switch (type) {
    case LOAD_BING_IMAGE:
      return value.url;
    default:
      return state;
  }
};


export default backgroundImageReducer;
