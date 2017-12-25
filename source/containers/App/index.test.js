import 'mocha';
import { expect } from 'chai';

import React from 'react';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { shallow, configure } from 'enzyme';

import AppContainer from './index';

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
    return shallow(<AppContainer {...props} />);
}

describe('appContainer', () => {
    it('should build appContainer', () => {
        const wrapper = setup();
        expect(wrapper).to.be.a('object');
    });
});
