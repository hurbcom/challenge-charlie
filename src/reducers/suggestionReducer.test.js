import 'mocha';
import { expect } from 'chai';

import suggestionReducer from './suggestionReducer.js';

describe('suggestionReducer', () => {
    it('should reduce to previous state correctly', () => {

        const dispatch = {
            type: 'type',
            weather: 'newSuggestion',
        };
        const previousState = 'previousState';

        const result = suggestionReducer(previousState, dispatch);
        expect(result).to.be.equal(previousState);
    });
});