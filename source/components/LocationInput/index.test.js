import 'mocha';

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

import LocationInput from './index.js';

function setup() {
    const props = {};
    return shallow(<LocationInput {...props} />);
}

describe('locationInput', () => {
    it('should build locationInput component', () => {
        const wrapper = setup();
        expect(wrapper.find('div')).to.have.length(1);
    });
});
