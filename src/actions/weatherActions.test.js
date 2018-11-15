import 'mocha';
import { expect } from 'chai';

import {
    getWeatherByLocation,
    getWeatherByCoordinates,
    getWeatherSuccess,
    getWeatherFail,
} from './weatherActions';
import * as constants from '../constants/weather.js';

describe('weatherActions', () => {

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