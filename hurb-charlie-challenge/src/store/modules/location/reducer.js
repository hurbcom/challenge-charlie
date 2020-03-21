import produce from 'immer';

const INITIAL_STATE = {
    location: null
};

export default function location(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@location/REQUEST':
                break;
            case '@location/SUCESS':
                draft.state = action.payload.components.state;
                draft.city = action.payload.components.city;
                break;
            case '@location/FAILURE':
                break;
            default:
        }
    });
}
