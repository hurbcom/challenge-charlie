import { render } from '@config/tests/render'
import { screen } from '@testing-library/react'
import { DynamicBackground } from './dynamic-background.comp'

describe('DynamicBackground Component', () => {
    it('renders without errors', () => {
        render(<DynamicBackground />)
    })

    it('renders children', () => {
        render(<DynamicBackground>Test</DynamicBackground>)
        expect(screen.getByText('Test')).toBeInTheDocument()
    })
})
