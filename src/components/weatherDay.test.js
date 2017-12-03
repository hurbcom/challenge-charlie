import React from 'react';
import ReactDOM from 'react-dom';
import WeatherDay from './weatherDay';
import { shallow } from 'enzyme';

it('renders weather day with hot colors', () => {
  const componentRender = shallow(<WeatherDay temperature={40} />);
  expect(componentRender.find('.weather-day').hasClass('hot')).toEqual(true)
});

it('renders weather day with cold colors', () => {
  const componentRender = shallow(<WeatherDay temperature={10} />);
  expect(componentRender.find('.weather-day').hasClass('cold')).toEqual(true)
});

it('renders weather day with sunny colors', () => {
  const componentRender = shallow(<WeatherDay temperature={30} />);
  expect(componentRender.find('.weather-day').hasClass('sunny')).toEqual(true)
});

it('change temperature type when it is clicked', () => {
  const componentRender = shallow(<WeatherDay temperature={30} />);
  componentRender.find('.weather-temp').simulate('click')
  expect(componentRender.find('.temperature').html()).toContain('86ºF')
});
