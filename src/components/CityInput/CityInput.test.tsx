import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CityInput from '.';

describe('<CityInput />', () => {
    it('should render input', () => {
        const { container } = render(
            <CityInput
                state="São Paulo"
                city="São Paulo"
                onChangeCity={value => jest.fn(value)}
            />
        );

        expect(screen.getByTestId('city-input')).toBeTruthy();

        expect(screen.getByTestId('city-input')).toHaveAttribute(
            'placeholder',
            'São Paulo, São Paulo'
        );

        expect(container.firstChild).toMatchSnapshot();
    });

    it('should return a valid city', () => {
        const callbackFn = jest.fn(value => value.city);

        render(
            <CityInput
                state="São Paulo"
                city="São Paulo"
                onChangeCity={callbackFn}
            />
        );

        const input = screen.getByTestId('city-input');
        userEvent.type(input, 'Belo Horizonte');

        expect(input).toHaveValue('Belo Horizonte');

        setTimeout(() => {
            expect(callbackFn).toHaveBeenCalledTimes(1);
            expect(callbackFn).toHaveReturnedWith('Belo Horizonte');
        }, 3000);
    });

    it('should return a invalid value', () => {
        const callbackFn = jest.fn(value => value.city);

        render(
            <CityInput
                state="São Paulo"
                city="São Paulo"
                onChangeCity={callbackFn}
            />
        );

        const input = screen.getByTestId('city-input');
        userEvent.type(input, '1234567891');

        expect(input).toHaveValue('1234567891');

        setTimeout(() => {
            expect(callbackFn).toHaveBeenCalledTimes(1);
            expect(callbackFn).toHaveReturnedWith(null);
            expect(screen.getByTestId('city-input-holder')).toHaveStyle({
                border: '3px solid #ff0000'
            });
        }, 3000);
    });
});
