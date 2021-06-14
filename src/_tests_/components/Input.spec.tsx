import { render, fireEvent } from '@testing-library/react';

import Input from '../../components/Input';

describe('Input component', () => {
    test('should be able to render an input', () => {
        const { getByPlaceholderText } = render(
            <Input name="test" placeholder="Teste" />,
        );

        expect(getByPlaceholderText('Teste')).toBeTruthy();
    });

    test('should fill in the input ', async () => {
        const { getByPlaceholderText } = render(
            <Input name="test" placeholder="Teste" />,
        );

        const inputElement = getByPlaceholderText('Teste');
        fireEvent.change(inputElement, { target: { value: 'Rio de Janeiro' } });
    });
});
