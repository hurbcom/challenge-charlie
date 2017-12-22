import 'mocha';
import { expect } from 'chai';

import {
    getLocationWeatherUrlByName,
    getLocationWeatherUrlByCoordinates,
    fetchLocationWeatherByNameSuccess,
    fetchCurrentLocationWeatherSuccess,
    fetchCurrentLocationWeatherFail,
    buildWeatherState } from './locationActions.js';
import * as constants from '../constants.js';

describe('locationActions', () => {
    it('should get complete weather url by location name', () => {
        const location = 'Rio de Janeiro, RJ';
        const result = getLocationWeatherUrlByName(location);

        expect(typeof result).to.be.equal('string');
    });

    it('should get complete weather url by coordinates', () => {
        const result = getLocationWeatherUrlByCoordinates(-5, -40);

        expect(typeof result).to.be.equal('string');
    });

    it('should dispatch type load location weather success', () => {
        const weather = {};
        const result = fetchLocationWeatherByNameSuccess(weather);

        expect(result.type).to
            .be.equal(constants.LOAD_LOCATION_WEATHER_SUCCESS);
        expect(result.weather).to.be.equal(weather);
    });

    it('should dispatch type load current location weather success', () => {
        const weather = {};
        const result = fetchCurrentLocationWeatherSuccess(weather);

        expect(result.type).to
            .be.equal(constants.LOAD_CURRENT_LOCATION_WEATHER_SUCCESS);
        expect(result.weather).to.be.equal(weather);
    });

    it('should dispatch type load current location weather fail', () => {
        const result = fetchCurrentLocationWeatherFail();

        expect(result.type).to
            .be.equal(constants.LOAD_CURRENT_LOCATION_WEATHER_FAIL);
    });

    it('should build empty weather state', () => {
        const weatheState = buildWeatherState({});

        expect(typeof weatheState).to.be.equal('object');
    });
});
