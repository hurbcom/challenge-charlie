import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Error from '../../components/Error';
import '@testing-library/jest-dom'

describe('Error Component', () => {
    const onClickMock = jest.fn();
    test('Should render component', () => {
        const { getByText } = render(<Error error='any_error' reload={onClickMock} />)
        expect(getByText('any_error')).toBeInTheDocument()
    })

    test('Should click reload button', () => {
        const { getByText } = render(<Error error='any_error' reload={onClickMock} />)
        const btn = getByText('Recarregar')
        fireEvent.click(btn)
        expect(onClickMock).toBeCalledTimes(1)
    })
})