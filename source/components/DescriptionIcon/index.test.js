import 'mocha';

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

import DescriptionIcon from './index.js';

function setup() {
    const props = {
        icon: 'sunny',
    };
    return shallow(<DescriptionIcon {...props} />);
}

describe('descriptionIcon', () => {
    it('should build descriptionText component', () => {
        const wrapper = setup();
        expect(wrapper.find('div')).to.have.length(1);
    });
});
