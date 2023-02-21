import React from "react";
import { fireEvent, screen } from '@testing-library/react';

import CompassIcon from '~/assets/compass.svg';
import renderWithProviders from '~/utils/renderWithProviders';

import { Input } from '.';

describe('components - <Input />', () => {
  it('should render correctly', () => {
    const { container } = renderWithProviders(<Input />);

    expect(container).toMatchSnapshot();
  });

  it('should render with an icon', () => {
    renderWithProviders(<Input icon={{ svg: CompassIcon, alt: 'Ícone de compasso' }} />);

    expect(screen.getByLabelText('Ícone de compasso')).toBeInTheDocument();
  });

  it('should handle with change event', () => {
    const onChange = jest.fn();

    renderWithProviders(<Input onChange={onChange} />);

    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'John Doe' } });

    expect(onChange).toHaveBeenCalled();
    expect((input as HTMLInputElement).value).toBe('John Doe');
  });

  it('should handle focus on input', () => {
    const inputRef = React.createRef<HTMLInputElement>();

    renderWithProviders(<Input ref={inputRef} />);

    const input = screen.getByRole('textbox');

    if (input?.parentElement !== null) {
      fireEvent.click(input?.parentElement);
    }

    if (inputRef.current) {
      inputRef.current.focus();
    }

    expect(input).toHaveFocus();
  });
});
