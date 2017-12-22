import 'mocha';
import { expect } from 'chai';

import {
    getLocationWeatherUrlByName,
    fetchLocationWeatherByNameSuccess,
    buildWeatherState } from './locationActions.js';
import * as constants from '../constants.js';

describe('locationActions', () => {
    it('should get complete weather url by location name', () => {
        const location = 'Rio de Janeiro, RJ';
        const result = getLocationWeatherUrlByName(location);

        expect(typeof result).to.be.equal('string');
    });

    it('should dispatch type load location weather success', () => {
        const weather = {};
        const result = fetchLocationWeatherByNameSuccess(weather);

        expect(result.type).to
            .be.equal(constants.LOAD_LOCATION_WEATHER_SUCCESS);
        expect(result.weather).to.be.equal(weather);
    });

    it('should build empty weather state', () => {
        const weatheState = buildWeatherState({});

        expect(typeof weatheState).to.be.equal('object');
    });
});
