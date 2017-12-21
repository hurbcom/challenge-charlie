import 'mocha';

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

import App from './index.js';

function setup() {
    const props = {};
    return shallow(<App {...props} />);
}

describe('App', () => {
    it('should build app', () => {
        const wrapper = setup();
        expect(wrapper.find('div')).to.have.length(1);
    });
});
