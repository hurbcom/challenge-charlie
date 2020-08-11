import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders background', () => {
    render(<App />);
    const backgroundElement = screen.getByTitle('Background');
    expect(backgroundElement).toBeInTheDocument();
});