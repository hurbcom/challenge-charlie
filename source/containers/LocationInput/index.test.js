import 'mocha';
import { expect } from 'chai';

import React from 'react';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { shallow, configure } from 'enzyme';

import LocationInputContainer from './index';

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
    return shallow(<LocationInputContainer {...props} />);
}

describe('locationInputContainer', () => {
    it('should build locationInputContainer', () => {
        const wrapper = setup();
        expect(wrapper).to.be.a('object');
    });
});
