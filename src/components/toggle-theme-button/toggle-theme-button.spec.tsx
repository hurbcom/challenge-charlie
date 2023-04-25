import { render } from '@config/tests/render'
import { screen, fireEvent } from '@testing-library/react'
import { ToggleThemeButton } from './toggle-theme-button.comp'

describe('ToggleThemeButton', () => {
    it('renders the button with the light theme icon', () => {
        render(<ToggleThemeButton />)
        const button = screen.getByTestId('button')
        expect(button).toBeInTheDocument()
        const sunIcon = screen.getByTestId('sun')
        expect(sunIcon).toBeInTheDocument()
    })

    it('renders the button with the dark theme icon', () => {
        render(<ToggleThemeButton />)
        const button = screen.getByTestId('button')
        expect(button).toBeInTheDocument()
        fireEvent.click(button)
        const moonIcon = screen.getByTestId('moon')
        expect(moonIcon).toBeInTheDocument()
    })
})
