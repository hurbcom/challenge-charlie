
import React from 'react';
import ReactDOM from 'react-dom';
import Weekday, { toColor, toIcon } from '../components/Weekday/Weekday';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Weekday />, div);
});

it('converts temperatures to colors', () => {
  expect(toColor([10, 'ºC'])).toBe('rgba(31,136,167,0.9)');
  expect(toColor([20, 'ºC'])).toBe('rgba(223,168,0,0.9)');
  expect(toColor([40, 'ºC'])).toBe('rgba(185,38,79,0.9)');
  expect(toColor([50, 'ºF'])).toBe('rgba(31,136,167,0.9)');
  expect(toColor([80, 'ºF'])).toBe('rgba(223,168,0,0.9)');
  expect(toColor([100, 'ºF'])).toBe('rgba(185,38,79,0.9)');
});

it('converts conditions to icons', () => {
  expect(toIcon(200)).toBe('0');
  expect(toIcon(300)).toBe('R');
  expect(toIcon(500)).toBe('Q');
  expect(toIcon(600)).toBe('G');
  expect(toIcon(701)).toBe('M');
  expect(toIcon(0)).toBe('B');
});