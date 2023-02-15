import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CompassIcon from '~/assets/compass.svg';

import { Input } from '.';

describe('components - <Input />', () => {
  it('should render correctly', () => {
    const { container } = render(<Input />);

    expect(container).toMatchSnapshot();
  });

  it('should render with an icon', () => {
    render(<Input icon={{ svg: CompassIcon, alt: 'Ícone de compasso' }} />);

    expect(screen.getByLabelText('Ícone de compasso')).toBeInTheDocument();
  });

  it('should handle with change event', () => {
    const onChange = jest.fn();

    render(<Input onChange={onChange} />);

    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'John Doe' } });

    expect(onChange).toHaveBeenCalled();
    expect((input as HTMLInputElement).value).toBe('John Doe');
  });
});
