import 'mocha';
import { expect } from 'chai';

import * as constants from '../constants.js';

import suggestionReducer from './suggestionReducer.js';

describe('suggestionReducer', () => {
    it('should change suggestion', () => {
        const previousState = 'Sao Paulo, SP - Brazil';
        const newState = 'Rio de Janeiro, RJ - Brazil';
        const dispatch = {
            type: constants.LOAD_LOCATION_NAME_SUGGESTION_SUCCESS,
            name: newState,
        };
        const result = suggestionReducer(previousState, dispatch);
        expect(result).to.be.equal(newState);
    });

    it('should clean suggestion', () => {
        const previousState = 'Sao Paulo, SP - Brazil';

        const dispatch = {
            type: constants.LOAD_LOCATION_NAME_SUGGESTION_FAIL,
        };
        const result = suggestionReducer(previousState, dispatch);
        expect(result).to.be.equal(null);
    });

    it('should reduce to previous state correctly', () => {
        const previousState = 'Sao Paulo, SP - Brazil';
        const newState = 'Rio de Janeiro, RJ - Brazil';

        const dispatch = {
            type: 'someOtherType',
            name: newState,
        };
        const result = suggestionReducer(previousState, dispatch);
        expect(result).to.be.equal(previousState);
    });
});
