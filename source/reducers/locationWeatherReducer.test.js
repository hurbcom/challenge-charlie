import 'mocha';
import { expect } from 'chai';

import locationWeatherReducer from './locationWeatherReducer.js';
import * as constants from '../constants.js';

describe('locationWeatherReducer', () => {
    it('should reduce load location weather success', () => {
        const previousState = 'previousWeather';
        const dispatch = {
            type: constants.LOAD_LOCATION_WEATHER_SUCCESS,
            weather: 'newWeather',
        };
        const result = locationWeatherReducer(previousState, dispatch);
        expect(result).to.be.equal('newWeather');
    });

    it('should reduce to previous state correctly', () => {
        const previousState = 'someState';
        const dispatch = {
            type: 'someOtherType',
            weather: 'newState',
        };
        const result = locationWeatherReducer(previousState, dispatch);
        expect(result).to.be.equal(previousState);
    });
});
