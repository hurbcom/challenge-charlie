import { render } from '@config/tests/render'
import { fireEvent, screen, waitFor } from '@testing-library/react'
import { SearchCityInput } from './search-city-input.comp'
import { requests } from '@services'

jest.mock('@services', () => {
    return {
        requests: {
            positionStack: {
                getCities: jest.fn(),
            },
        },
    }
})

describe('SearchCityInput Component', () => {
    const onSelectCityMock = jest.fn()

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('renders without errors', () => {
        render(
            <SearchCityInput onSelectCity={onSelectCityMock} defaultValue="" />
        )
    })

    it('fetches cities when typing', async () => {
        const getCitiesMock = requests.positionStack.getCities as jest.Mock
        getCitiesMock.mockResolvedValueOnce([])
        render(
            <SearchCityInput onSelectCity={onSelectCityMock} defaultValue="" />
        )
        const input = screen.getByRole('textbox')
        fireEvent.change(input, { target: { value: 'São Paulo' } })

        await waitFor(
            () => {
                expect(getCitiesMock).toHaveBeenCalled()
            },
            { timeout: 3000 }
        )
    })

    it('shows suggestions when typing', async () => {
        const getCitiesMock = requests.positionStack.getCities as jest.Mock
        getCitiesMock.mockResolvedValueOnce([{ label: 'São Paulo, Brazil' }])
        render(
            <SearchCityInput onSelectCity={onSelectCityMock} defaultValue="" />
        )
        const input = screen.getByRole('textbox')
        fireEvent.change(input, { target: { value: 'São Paulo' } })
        const suggestion = await screen.findByText('São Paulo, Brazil')
        expect(suggestion).toBeInTheDocument()
    })

    it('calls onSelectCity when selecting a city', async () => {
        const getCitiesMock = requests.positionStack.getCities as jest.Mock
        getCitiesMock.mockResolvedValueOnce([{ label: 'São Paulo, Brazil' }])
        render(
            <SearchCityInput onSelectCity={onSelectCityMock} defaultValue="" />
        )
        const input = screen.getByRole('textbox')
        fireEvent.change(input, { target: { value: 'São Paulo' } })
        const suggestion = await screen.findByText('São Paulo, Brazil')
        fireEvent.click(suggestion)
        expect(onSelectCityMock).toHaveBeenCalledWith('São Paulo, Brazil')
    })

    it('calls onSelectCity when pressing enter', () => {
        render(
            <SearchCityInput onSelectCity={onSelectCityMock} defaultValue="" />
        )
        const input = screen.getByRole('textbox')
        fireEvent.change(input, { target: { value: 'São Paulo' } })
        fireEvent.keyDown(input, { key: 'Enter' })
        expect(onSelectCityMock).toHaveBeenCalledWith('São Paulo')
    })
})
