import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WeatherOther from './index';

configure({ adapter: new Adapter() });
describe('WeatherOther', () => {
  it('renderts without crashing', () => {
    const wrapper = shallow(<WeatherOther />);
    expect(wrapper.length).toBe(1);
  });
  it('should have .weather-header class', () => {
    const wrapper = shallow(<WeatherOther />);
    expect(wrapper.is('.weather-week')).toBe(true);
    expect(wrapper.is('.weather-week2')).toBe(false);
  });
});
