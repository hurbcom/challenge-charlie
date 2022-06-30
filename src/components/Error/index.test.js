import React from 'react';
import renderer from 'react-test-renderer';
import { Error } from './index';

describe('Error', () => {
  it('should render partial text when has no prop', () => {
    const Component = renderer.create(<Error />).root;
    expect(Component.findByType('p').children).toEqual(['Algo deu errado...']);
  });

  it('should render full text when has isWeather prop', () => {
    const textValue = [
      'Algo deu errado...',
      ' Talvez seu navegador não tenha suporte à geolocalização.',
    ];
    const Component = renderer.create(<Error isWeather={true} />).root;
    expect(Component.findByType('p').children).toEqual(textValue);
  });

  it('should have correct styles when has no prop', () => {
    const Component = renderer.create(<Error />).toJSON();
    expect(Component).toHaveStyleRule('display', 'none');
    expect(Component).toHaveStyleRule('width', '100vw');
    expect(Component).toHaveStyleRule('height', '85vh');
  });

  it('should have correct styles when has isWeather prop', () => {
    const Component = renderer.create(<Error isWeather={true} />).toJSON();
    expect(Component).toHaveStyleRule('display', 'flex');
    expect(Component).toHaveStyleRule('width', '70%');
    expect(Component).toHaveStyleRule('height', 'auto');
  });
});
