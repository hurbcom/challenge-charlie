import 'mocha';
import { expect } from 'chai';

import { getSuggestionSuccess, getSuggestionFail } from './suggestionActions';
import * as constants from '../constants/suggestion.js';

describe('suggestionActions', () => {

    it('should dispatch fetch suggestion success', () => {
        const suggestion = '';
        const result = getSuggestionSuccess(suggestion);

        expect(result.type).to
            .be.equal(constants.SUGGESTION_FETCH_SUCCESS);
        expect(result.suggestion).to.be.equal(suggestion);
    });

    it('should dispatch fetch suggestion fail', () => {
        const result = getSuggestionFail();

        expect(result.type).to
            .be.equal(constants.SUGGESTION_FETCH_FAIL);
    });
});