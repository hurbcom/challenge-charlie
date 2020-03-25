import produce from 'immer';
import { toast } from 'react-toastify';

const INITIAL_STATE = {
    location: null
};

export default function location(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@location/REQUEST':
                break;
            case '@location/SUCESS':
                draft.data = action.payload;
                break;
            case '@location/FAILURE':
                toast.error('Erro Local Invalido');
                break;
            case '@location/UPDATE':
                break;
            default:
        }
    });
}
