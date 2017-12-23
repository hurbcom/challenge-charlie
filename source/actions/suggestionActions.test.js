import 'mocha';
import { expect } from 'chai';

import {
    getLocationWeatherUrlByName,
    fetchLocationNameSuccess,
    fetchLocationNameFail,
} from './suggestionActions.js';
import * as constants from '../constants.js';

describe('suggestionActions', () => {
    it('should get complete weather url by location name', () => {
        const location = 'Rio de Janeiro, RJ';
        const result = getLocationWeatherUrlByName(location);

        expect(typeof result).to.be.equal('string');
    });

    it('should dispatch type load location name suggestion success', () => {
        const name = 'Rio de Janeiro, RJ';
        const result = fetchLocationNameSuccess(name);

        expect(result.type).to
            .be.equal(constants.LOAD_LOCATION_NAME_SUGGESTION_SUCCESS);
        expect(result.name).to.be.equal(name);
    });

    it('should dispatch type load location name suggestion fail', () => {
        const result = fetchLocationNameFail();

        expect(result.type).to
            .be.equal(constants.LOAD_LOCATION_NAME_SUGGESTION_FAIL);
    });
});
