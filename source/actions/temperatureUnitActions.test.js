import 'mocha';
import { expect } from 'chai';

import { changeTemperatureUnit } from './temperatureUnitActions.js';
import * as constants from '../constants.js';

describe('temperatureUnitActions', () => {
    it('should dispatch change temperature unit action', () => {
        const result = changeTemperatureUnit();
        expect(result.type).to.be.equal(constants.CHANGE_TEMPERATURE_UNIT);
    });
});
