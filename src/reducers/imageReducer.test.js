import 'mocha';
import { expect } from 'chai';

import imageReducer from './imageReducer.js';

describe('imageReducer', () => {
    it('should reduce to previous state correctly', () => {

        const dispatch = {
            type: 'type',
            image: 'newImage',
        };
        const previousState = 'previousState';

        const result = imageReducer(previousState, dispatch);
        expect(result).to.be.equal(previousState);
    });
});