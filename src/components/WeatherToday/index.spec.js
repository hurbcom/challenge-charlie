import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WeatherToday from './index';

configure({ adapter: new Adapter() });

describe('WeatherToday', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(<WeatherToday />);
  });

  it('There is the Header WeatherToday', () => {
    expect(wrapper).toHaveLength(1);
  });
});
