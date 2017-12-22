import 'mocha';

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

import Tile from './index.js';

function setup() {
    const props = {};
    return shallow(<Tile {...props} />);
}

describe('Tile', () => {
    it('should build tile component', () => {
        const wrapper = setup();
        expect(wrapper.find('div')).to.have.length(1);
    });
});
