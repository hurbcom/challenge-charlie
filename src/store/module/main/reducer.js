import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    /* case '@background/ADD_BACKGROUND':
      return produce(state, draft => {
        const { background } = action;
        draft.push(background);
      }); */
    case '@background/ADD_BACKGROUND':
      return produce(state, () => {
        console.log(action);
        console.log('background');
      });
    case '@unit/UPDATE_UNIT':
      return produce(state, () => {
        console.log(action);
        console.log('unit');
      });
    case '@opened/UPDATE_OPENED':
      return produce(state, () => {
        console.log(action);
        console.log('opened');
      });
    case '@brazilStates/UPDATE_BRAZIL_STATES':
      return produce(state, () => {
        console.log(action);
        console.log('brazilStates');
      });
    case '@location/UPDATE_LOCATION':
      return produce(state, () => {
        console.log(action);
        console.log('location');
      });
    case '@selectedValue/UPDATE_SELECTED_VALUE':
      return produce(state, () => {
        console.log(action);
        console.log('selectedValue');
      });
    case '@weather/UPDATE_WEATHER':
      return produce(state, () => {
        console.log(action);
        console.log('weather');
      });
    default:
      return state;
  }
}
