import 'mocha';
import { expect } from 'chai';

import backgroundReducer from './backgroundReducer.js';
import * as constants from '../constants.js';

describe('backgroundReducer', () => {
    it('should reduce load background success', () => {
        const previousState = 'previousBackgroundUrl';
        const dispatch = {
            type: constants.LOAD_BACKGROUND_SUCCESS,
            backgroundUrl: 'newBackgroundUrl',
        };
        const result = backgroundReducer(previousState, dispatch);
        expect(result).to.be.equal('newBackgroundUrl');
    });

    it('should reduce to previous state correctly', () => {
        const previousState = 'someState';
        const dispatch = {
            type: 'someOtherType',
            backgroundUrl: 'newState',
        };
        const result = backgroundReducer(previousState, dispatch);
        expect(result).to.be.equal(previousState);
    });
});
