import 'mocha';
import { expect } from 'chai';

import suggestionReducer from './suggestionReducer.js';

describe('unitReducer', () => {
    it('should reduce to previous state correctly', () => {

        const dispatch = {
            type: 'type',
            unit: 'newUnit',
        };
        const previousState = 'previousState';

        const result = suggestionReducer(previousState, dispatch);
        expect(result).to.be.equal(previousState);
    });
});