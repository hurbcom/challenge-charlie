import 'mocha';
import { expect } from 'chai';

import React from 'react';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { shallow, configure } from 'enzyme';

import WeatherContainer from './index';

configure({ adapter: new Adapter() });

function setup() {
    const props = {
        store: configureStore([thunk])({
            temperatureUnit: 'celsius',
            weather: {
                locationName: 'Rio de Janeiro, RJ',
                firstTile: {
                    high: 10,
                },
                secondTile: {
                    high: 20,
                },
            },
        }),
    };
    return shallow(<WeatherContainer {...props} />);
}

describe('weatherContainer', () => {
    let wrapper = {};

    beforeEach(() => {
        wrapper = setup();
    });

    it('should get temperature with unit', () => {
        const temperature = wrapper.dive().instance().getTemperatureWithUnit(0);
        expect(temperature).to.be.equal('-17.8ºC');
    });

    it('should get first tile temperature', () => {
        const temperature = wrapper.dive().instance().getFirstTemperature();
        expect(temperature).to.be.equal(10);
    });

    it('should get second tile temperature', () => {
        const temperature = wrapper.dive().instance().getSecondTemperature();
        expect(temperature).to.be.equal(20);
    });

    it('should get backbackground color', () => {
        const backgroundColor =
            wrapper.dive().instance().getBackbackgroundColor(0);
        expect(backgroundColor).to.be.equal('rgb(100, 100, 255)');
    });

    it('should get first tile color', () => {
        const color =
            wrapper.dive().instance().getFirstTileColor();
        expect(color).to.be.equal('rgb(100, 100, 255)');
    });

    it('should get second tile color', () => {
        const color =
            wrapper.dive().instance().getSecondTileColor();
        expect(color).to.be.equal('rgb(100, 100, 255)');
    });
});
