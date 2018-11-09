import 'mocha';
import { expect } from 'chai';

import weatherReducer from './weatherReducer.js';

describe('weatherReducer', () => {
    it('should reduce to previous state correctly', () => {

        const dispatch = {
            type: 'type',
            weather: 'newWeather',
        };
        const previousState = 'previousState';

        const result = weatherReducer(previousState, dispatch);
        expect(result).to.be.equal(previousState);
    });
});