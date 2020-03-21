import produce from 'immer';

const INITIAL_STATE = {
    weather: null
};

export default function weather(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@weather/REQUEST':
                break;
            case '@weather/SUCESS':
                draft.data = action.payload;
                break;
            case '@weather/FAILURE':
                break;
            case '@weather/UPDATE':
                break;
            default:
        }
    });
}
