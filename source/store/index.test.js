import 'mocha';
import { expect } from 'chai';

import * as temperatureUnitActions from '../actions/temperatureUnitActions';
import configureStore from './index.js';

describe('store', () => {
    let store = {};

    beforeEach(() => {
        const initialState = {
            temperatureUnit: 'celsius',
        };

        store = configureStore(initialState);
    });

    it('should have temperature unit', () => {
        const temperatureUnit = store.getState().temperatureUnit;

        expect(temperatureUnit).to.be.equal('celsius');
    });

    it('should change temperature unit to farenheit after change action',
        () => {
            const changeAction = temperatureUnitActions.changeTemperatureUnit();
            store.dispatch(changeAction);
            const temperatureUnit = store.getState().temperatureUnit;

            expect(temperatureUnit).to.be.equal('farenheit');
        });
});
