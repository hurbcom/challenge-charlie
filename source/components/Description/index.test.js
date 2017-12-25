import 'mocha';

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

import Description from './index.js';

function setup() {
    const props = {};
    return shallow(<Description {...props} />);
}

describe('description', () => {
    it('should build description component', () => {
        const wrapper = setup();
        expect(wrapper.find('div')).to.have.length(1);
    });
});
