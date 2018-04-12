import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loading from './index';

configure({ adapter: new Adapter() });

describe('Loading Component', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Loading />);
  });

  it('There is the Loading component', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('Contains tag image', () => {
    expect(wrapper.find('.loading > img').exists()).toEqual(true);
  });

  it('Image contains src', () => {
    expect(wrapper.find('img[src]')).toHaveLength(1);
  });
});
