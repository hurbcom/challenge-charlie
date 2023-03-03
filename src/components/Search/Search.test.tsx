import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';

import { theme } from '~/styles/theme';
import CompassIcon from '~/assets/compass.svg';
import renderWithProviders from '~/utils/renderWithProviders';

import { Search, SearchProps } from '.';

const mockedOnSearch = jest.fn();

const defaultValues: SearchProps = {
  isLoading: false,
  withError: false,
  onSearch: mockedOnSearch,
  cleanSearch: jest.fn,
};

describe('components - <Search />', () => {
  it('should render correctly', () => {
    const { container } = renderWithProviders(<Search {...defaultValues} />);

    expect(container).toMatchSnapshot();
    expect(screen.getByRole('button')).toHaveStyle(`background: ${theme.colors.blue}`);
  });

  it('should render with an icon', () => {
    renderWithProviders(
      <Search {...defaultValues} icon={{ svg: CompassIcon, alt: 'Ícone de compasso', position: 0 }} />,
    );

    expect(screen.getByLabelText('Ícone de compasso')).toBeInTheDocument();
  });

  it('should handle with change event and send info', async () => {
    const user = userEvent.setup();

    renderWithProviders(<Search {...defaultValues} onChange={jest.fn()} />);

    const input = screen.getByRole('textbox');

    user.type(input, 'John Doe');

    jest.runAllTimers();

    await waitFor(() => {
      expect(input).toHaveValue('John Doe');
    });

    const sendButton = screen.getByRole('button');

    user.click(sendButton);

    await waitFor(() => {
      expect(mockedOnSearch).toHaveBeenCalledWith('John Doe');
    });
  });

  it('should handle focus on input', () => {
    const user = userEvent.setup();
    const inputRef = React.createRef<HTMLInputElement>();

    renderWithProviders(<Search {...defaultValues} ref={inputRef} />);

    const input = screen.getByRole('textbox');

    if (input?.parentElement !== null) {
      user.click(input?.parentElement);
    }

    if (inputRef.current) {
      inputRef.current.focus();
    }

    expect(input).toHaveFocus();
  });

  describe('send button', () => {
    it('should disable button if is loading', () => {
      renderWithProviders(<Search {...defaultValues} isLoading />);

      const sendButton = screen.getByRole('button');

      expect(sendButton).toBeDisabled();
      expect(sendButton).toHaveStyle(`background: ${theme.colors.gray300}`);
    });

    it('should be red when has an error', () => {
      renderWithProviders(<Search {...defaultValues} withError />);

      expect(screen.getByRole('button')).toHaveStyle(`background: ${theme.colors.red}`);
    });
  });
});
