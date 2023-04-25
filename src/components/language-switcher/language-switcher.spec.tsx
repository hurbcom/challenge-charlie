import { screen, fireEvent } from '@testing-library/react'
import LanguageSwitcher from './language-switcher.comp'
import { render } from '@config/tests/render'

const changeLanguageMock = jest.fn()
jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        i18n: {
            language: 'en',
            changeLanguage: changeLanguageMock,
        },
    }),
}))

describe('LanguageSwitcher', () => {
    const original = window.location

    beforeAll(() => {
        Object.defineProperty(window, 'location', {
            configurable: true,
            value: { reload: jest.fn() },
        })
    })

    afterAll(() => {
        Object.defineProperty(window, 'location', {
            configurable: true,
            value: original,
        })
    })

    it('renders without errors', () => {
        render(<LanguageSwitcher />)
    })

    it('displays the current language as default', () => {
        render(<LanguageSwitcher />)
        expect(screen.getByDisplayValue('🇺🇸 English')).toBeInTheDocument()
    })

    it('calls changeLanguage when a new language is selected', () => {
        render(<LanguageSwitcher />)
        const select = screen.getByRole('combobox')
        fireEvent.change(select, { target: { value: 'pt-BR' } })
        expect(changeLanguageMock).toHaveBeenCalledWith('pt-BR')
    })
})
