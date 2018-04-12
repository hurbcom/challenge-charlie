import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './index';

configure({ adapter: new Adapter() });

describe('Header Component', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Header />);
  });

  it('There is the Header component', () => {
    expect(wrapper.length).toBe(1);
  });

  it('Contains title', () => {
    expect(wrapper.find('.header > h1').exists()).toEqual(true);
  });
});
