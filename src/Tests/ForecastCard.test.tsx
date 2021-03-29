import ForecastCard from '../Components/ForecastCard'
import { render, fireEvent, screen, act } from '@testing-library/react';

describe("ForecastCard", () => {
    it("fetches image background url", async () => {
        await act(async () => {
            render(<ForecastCard />)
        })
        const input = screen.getByRole('textbox', { name: '' })

        await act(async () => {
            input.focus()
        })

        fireEvent.change(input, { target: { value: 'City Name' } })
        expect(input.value).toBe('City Name')
        expect(screen.getByTestId('dropdown')).toBeTruthy()
    })
})