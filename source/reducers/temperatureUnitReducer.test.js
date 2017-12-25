import 'mocha';
import { expect } from 'chai';

import * as constants from '../constants.js';

import temperatureUnitReducer from './temperatureUnitReducer.js';

describe('temperatureUnitReducer', () => {
    it('should change temperature unit from celsius to farenheit', () => {
        const previousState = 'celsius';
        const dispatch = { type: constants.CHANGE_TEMPERATURE_UNIT };
        const result = temperatureUnitReducer(previousState, dispatch);
        expect(result).to.be.equal('farenheit');
    });

    it('should change temperature unit from farenheit to celsius', () => {
        const previousState = 'farenheit';
        const dispatch = { type: constants.CHANGE_TEMPERATURE_UNIT };
        const result = temperatureUnitReducer(previousState, dispatch);
        expect(result).to.be.equal('celsius');
    });

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
