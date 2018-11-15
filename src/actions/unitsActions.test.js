import 'mocha';
import { expect } from 'chai';

import { changeTemperatureUnitSuccess } from './unitsActions.js';
import * as constants from '../constants/unit.js';

describe('unitActions', () => {

    it('should dispatch unit change success', () => {
        const tempUnit = 'F';
        const result = changeTemperatureUnitSuccess(tempUnit);

        expect(result.type).to
            .be.equal(constants.CHANGE_TEMPERATURE_UNIT);
        expect(result.unit).to.be.equal(tempUnit);
    });
});