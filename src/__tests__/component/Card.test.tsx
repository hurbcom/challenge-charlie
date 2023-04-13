import Card from "@/components/Card";
import { WeatherData } from "@/domain/models/weather";
import { render, fireEvent } from "@testing-library/react";
import weatherDataReponseMock from "../../__mocks__/weatherDataResponseMock";
import '@testing-library/jest-dom'
import { faker } from "@faker-js/faker";
import { HTMLInputTypeAttribute } from "react";

type sutType = {
    data: WeatherData
    handleSearch: (c?: string) => void
    search: string
    loading: boolean
}
const makeSut = (props: sutType) => render(<Card {...props} />)
const mockData = weatherDataReponseMock

describe('Card component', () => {

    const mockHandleSearchFn = jest.fn()

    const props = {
        data: mockData,
        handleSearch: mockHandleSearchFn,
        search: 'any_search',
        loading: false
    }

    test('should correct render', () => {

        const { getByTestId } = makeSut(props)
        const element = getByTestId('card')

        expect(element).toBeInTheDocument()
    });

    test('should correct condition name', () => {

        const fakeString = faker.lorem.word()
        props.data.current.weather[0].description = fakeString

        const { getByTestId } = makeSut(props)
        const element = getByTestId('card-condition')

        expect(element).toHaveTextContent(fakeString)
    })

    test('should correct call search function', () => {

        const { getByTestId } = makeSut(props)
        const btn = getByTestId('card-btn')

        fireEvent.click(btn)

        expect(mockHandleSearchFn).toBeCalledTimes(1)
    })

    test('should correct start name city in input', () => {
        const { getByTestId } = makeSut(props)
        const element = getByTestId('card-input') as HTMLInputElement
        const value = element.value
        expect(value).toBe('any_search')
    })

    test('should correct name city in input', () => {
        const { getByTestId } = makeSut(props)
        const element = getByTestId('card-input') as HTMLInputElement
        const changeFn = jest.fn()

        element.onchange = changeFn
        fireEvent.change(element, { target: { value: 'any_chage' } });

        expect(changeFn).toBeCalled()
    })

    test('should correct show spinner on loading', () => {
        props.loading = true;
        const { getByRole } = makeSut(props)
        const spinner = getByRole('status')

        expect(spinner).toBeInTheDocument()
    })

    test('should avoid render error and show correct value in case of not having the api data', () => {

        props.data.current.temp = 0
        props.data.daily[2].temp.day = 0
        props.data.daily[3].temp.day = 0

        const { getByTestId } = makeSut(props)
        const element = getByTestId('card-condition')

        expect(element).toBeInTheDocument()
    })

    test('should disable button', () => {

        props.search = ''

        const { getByTestId } = makeSut(props)
        const element = getByTestId('card-btn')

        expect(element).toHaveAttribute('disabled')
    })

});