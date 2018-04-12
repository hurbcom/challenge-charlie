import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WeatherOther from './index';

configure({ adapter: new Adapter() });

describe('WeatherOther', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<WeatherOther />);
  });

  it('There is the Header WeatherOther', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should have .weather-header class', () => {
    expect(wrapper.is('.weather-week')).toBe(true);
  });
});
