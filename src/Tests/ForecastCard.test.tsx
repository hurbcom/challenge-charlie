import ForecastCard from '../Components/ForecastCard'
import { render, fireEvent, screen, act, waitFor } from '@testing-library/react';
import { mockFetchPromise } from './utils';
import { fakeLocationResults } from './mocks';

beforeAll(() => jest.spyOn(window, 'fetch'))

describe("ForecastCard", () => {
    it("tests search location", async () => {
        await act(async () => {
            render(<ForecastCard />)
        })

        const input = screen.getByRole('textbox', { name: '' })

        await act(async () => {
            input.focus()
        })

        const dropdown = screen.getByTestId('dropdown')

        fireEvent.change(input, { target: { value: 'C' } })

        expect(dropdown.childElementCount).toBe(1)


        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise({ results: fakeLocationResults }));

        fireEvent.change(input, { target: { value: 'Rio de Janeiro' } })

        expect(input.value).toBe('Rio de Janeiro')

        await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1))
        expect(dropdown.childElementCount).toBe(10)
    })
})