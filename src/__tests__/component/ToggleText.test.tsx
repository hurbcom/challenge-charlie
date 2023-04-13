import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ToggleText from '../../components/ToggleText';
import '@testing-library/jest-dom'

describe('ToggleText Component', () => {
    test('should render with the first word visible', () => {
        const { getByText } = render(<ToggleText first="first" second="second" />);
        expect(getByText('first')).toBeInTheDocument();
    });

    test('should toggle between the first and second words on click', () => {
        const { getByTestId } = render(<ToggleText first="first" second="second" />);
        const toggleElement = getByTestId('toggle');
        fireEvent.click(toggleElement);
        expect(toggleElement).toHaveTextContent('second')
        fireEvent.click(toggleElement);
        expect(toggleElement).toHaveTextContent('first')
    });
});