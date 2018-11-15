import 'mocha';
import { expect } from 'chai';

import { getWeatherSuccess, getWeatherFail } from './locationActions.js';
import * as constants from '../constants/weather.js';

describe('locationActions', () => {

    it('should dispatch fetch weather success', () => {
        const weather = {};
        const result = getWeatherSuccess(weather);

        expect(result.type).to
            .be.equal(constants.WEATHER_FETCH_SUCCESS);
        expect(result.weather).to.be.equal(weather);
    });

    it('should dispatch fetch weather fail', () => {
        const result = getWeatherFail();

        expect(result.type).to
            .be.equal(constants.WEATHER_FETCH_FAIL);
    });
});