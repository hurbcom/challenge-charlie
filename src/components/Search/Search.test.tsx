import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CompassIcon from '~/assets/compass.svg';
import renderWithProviders from '~/utils/renderWithProviders';

import { Search } from '.';

describe('components - <Search />', () => {
  it('should render correctly', () => {
    const { container } = renderWithProviders(<Search />);

    expect(container).toMatchSnapshot();
  });

  it('should render with an icon', () => {
    renderWithProviders(<Search icon={{ svg: CompassIcon, alt: 'Ícone de compasso' }} />);

    expect(screen.getByLabelText('Ícone de compasso')).toBeInTheDocument();
  });

  it('should handle with change event', async () => {
    const user = userEvent.setup();

    renderWithProviders(<Search onChange={jest.fn()} />);

    const input = screen.getByRole('textbox');

    user.type(input, 'John Doe');

    jest.runAllTimers();

    await waitFor(() => {
      expect(input).toHaveValue('John Doe');
    });
  });

  it('should handle focus on input', () => {
    const user = userEvent.setup();
    const inputRef = React.createRef<HTMLInputElement>();

    renderWithProviders(<Search ref={inputRef} />);

    const input = screen.getByRole('textbox');

    if (input?.parentElement !== null) {
      user.click(input?.parentElement);
    }

    if (inputRef.current) {
      inputRef.current.focus();
    }

    expect(input).toHaveFocus();
  });
});
