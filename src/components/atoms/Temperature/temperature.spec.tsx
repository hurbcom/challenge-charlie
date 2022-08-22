import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Temperature from '.';

describe('<Temperature />', () => {
  it('should render correctly', () => {
    const component = render(<Temperature temp={1} />);

    expect(component).toMatchSnapshot();
  });

  describe('when onChangeScale prop is defined and this <Temperature /> clicked', () => {
    it('should call onClick prop function', () => {
      const spy = jest.fn();

      render(<Temperature temp={1} onChangeScale={spy} />);

      fireEvent.click(screen.getByText('1'));

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('when scale prop is defined', () => {
    it('should convert scale value', () => {
      const spy = jest.fn();

      const { getByText } = render(<Temperature temp={1} onChangeScale={spy} scale={2} />);

      expect(getByText(34)).toBeInTheDocument();
    });
  });
});
