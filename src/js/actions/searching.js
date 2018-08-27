// importar types
import * as types from './actionTypes'
import axios from 'axios';

export const startSearching = () => {
    return {
        type: types.IS_SEARCHING
    }
}
export const stopSearching = () => {
    return {
        type: types.NOT_SEARCHING
    }
}