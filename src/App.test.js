import { render, waitFor } from '@testing-library/react';
import App from './App';

test('should render the text on the footer', async () => {
  const { getByText } = render(<App />);
  await waitFor(() => {
    expect(getByText(/Page created by Jéssica Alonso/i)).toBeInTheDocument();
  })
})
