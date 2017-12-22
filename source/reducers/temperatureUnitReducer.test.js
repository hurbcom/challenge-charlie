import 'mocha';
import { expect } from 'chai';

import temperatureUnitReducer from './locationWeatherReducer.js';

describe('temperatureUnitReducer', () => {
    it('should reduce to previous state correctly', () => {
        const previousState = 'someState';
        const dispatch = {
            type: 'someOtherType',
            weather: 'newState',
        };
        const result = temperatureUnitReducer(previousState, dispatch);
        expect(result).to.be.equal(previousState);
    });
});
