import 'mocha';
import { expect } from 'chai';

import React from 'react';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { shallow, configure } from 'enzyme';

import DescriptionContainer from './index';

configure({ adapter: new Adapter() });

function setup() {
    const props = {
        store: configureStore([thunk])({
            temperatureUnit: 'celsius',
            weather: {
                locationName: 'Rio de Janeiro, RJ',
                weatherType: 31,
                temperature: 25,
                firstTile: {
                    high: 24,
                },
                secondTile: {
                    high: 25,
                },
                wind: {
                    speed: 40,
                    direction: 110,
                },
                atmosphere: {
                    humidity: 88,
                    pressure: 10030,
                },
            },
        }),
    };
    return shallow(<DescriptionContainer {...props} />);
}

describe('descriptionContainer', () => {
    let wrapper = {};

    beforeEach(() => {
        wrapper = setup();
    });

    it('should get temperature with unit', () => {
        const temperature = wrapper.dive().instance().getTemperature();
        expect(temperature).to.be.equal('-3.9ºC');
    });

    it('should convert wind degress to cardinals ', () => {
        const cardinals =
            wrapper.dive().instance().convertDegreesToCardinals(50);
        expect(cardinals).to.be.equal('NE');
    });

    it('should get wind informations', () => {
        const wind =
            wrapper.dive().instance().getWind();
        expect(wind).to.be.equal('ESE 64km/h');
    });

    it('should get humidity information', () => {
        const humidity =
            wrapper.dive().instance().getHumidity();
        expect(humidity).to.be.equal('88%');
    });

    it('should get pressure information', () => {
        const pressure =
            wrapper.dive().instance().getPressure();
        expect(pressure).to.be.equal('10030hPA');
    });

    it('should getWeatherTypeInfo', () => {
        const weatherTypeName =
            wrapper.dive().instance().getWeatherTypeName();
        expect(weatherTypeName).to.be.equal('Ensolarado');
    });

    it('should get background color', () => {
        const backgroundColor =
            wrapper.dive().instance().getBackgroundColor();
        expect(backgroundColor).to.be.equal('rgba(100, 100, 255, 0.7)');
    });
});
