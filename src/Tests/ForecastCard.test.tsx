import ForecastCard from '../Components/ForecastCard'
import { render, fireEvent, screen, act, waitFor, within } from '@testing-library/react';
import { mockFetchPromise } from './utils';
import { fakeForecastData, fakeLocationResults } from './mocks';

beforeAll(() => jest.spyOn(window, 'fetch'))

test("tests search location", async () => {
    let container;
    await act(async () => {
        const result = render(<ForecastCard />)
        container = result.container
    })
    //Find search input
    const input = screen.getByRole('textbox', { name: '' }) as HTMLInputElement

    //Focus on search input sets up state do show dropdown
    await act(async () => {
        input.focus()
    })

    //Check if dropdown can be found on screen
    const dropdown = screen.getByTestId('dropdown')

    fireEvent.change(input, { target: { value: 'R' } })

    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise({ results: [] }));

    //Check no results label
    expect(dropdown.childElementCount).toBe(1)
    expect(screen.getByText(/no\sresults/i)).toBeTruthy()


    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise({ results: fakeLocationResults }));

    fireEvent.change(input, { target: { value: 'Rio de Janeiro' } })

    expect(input.value).toBe('Rio de Janeiro')

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1))

    const options = within(dropdown).queryAllByRole('listitem')
    expect(options).toHaveLength(10)

    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise(fakeForecastData));

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1))

    await act(async () => {
        options[0].click();
    })

    expect(container).toMatchSnapshot()

})
