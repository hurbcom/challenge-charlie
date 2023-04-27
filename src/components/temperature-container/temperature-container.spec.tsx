import { render } from '@config/tests/render'
import { screen } from '@testing-library/react'
import { TemperatureContainer } from './temperature-container.comp'

describe('TemperatureContainer', () => {
    it('renders the default color when temperature is not provided', () => {
        const defaultColor = '#fff'
        render(
            <TemperatureContainer
                colors={['#000', '#999', '#888']}
                defaultColor={defaultColor}
            />
        )
        const box = screen.getByTestId('box')
        expect(box).toHaveStyle(`background-color: ${defaultColor}`)
    })

    it('renders the first color when temperature is less than 15°C', () => {
        const colors = ['#000', '#999', '#888']
        const defaultColor = '#fff'
        const temperature = 10
        render(
            <TemperatureContainer
                colors={colors}
                defaultColor={defaultColor}
                temperature={temperature}
            />
        )
        const box = screen.getByTestId('box')
        expect(box).toHaveStyle(`background-color: ${colors[0]}`)
    })

    it('renders the second color when temperature is between 15°C and 35°C', () => {
        const colors = ['#000', '#999', '#888']
        const defaultColor = '#fff'
        const temperature = 25
        render(
            <TemperatureContainer
                colors={colors}
                defaultColor={defaultColor}
                temperature={temperature}
            />
        )
        const box = screen.getByTestId('box')
        expect(box).toHaveStyle(`background-color: ${colors[1]}`)
    })

    it('renders the third color when temperature is greater than 35°C', () => {
        const colors = ['#000', '#999', '#888']
        const defaultColor = '#fff'
        const temperature = 40
        render(
            <TemperatureContainer
                colors={colors}
                defaultColor={defaultColor}
                temperature={temperature}
            />
        )
        const box = screen.getByTestId('box')
        expect(box).toHaveStyle(`background-color: ${colors[2]}`)
    })

    it('shows a spinner when loading is true', () => {
        const defaultColor = '#fff'
        render(
            <TemperatureContainer
                colors={['#000', '#999', '#888']}
                defaultColor={defaultColor}
                loading={true}
            />
        )
        const spinner = screen.getByTestId('spinner')
        expect(spinner).toBeInTheDocument()
    })

    it('renders the children when loading is false', () => {
        const defaultColor = '#fff'
        const children = <div>Some content</div>
        render(
            <TemperatureContainer
                colors={['#000', '#999', '#888']}
                defaultColor={defaultColor}
                loading={false}
            >
                {children}
            </TemperatureContainer>
        )
        const content = screen.getByText('Some content')
        expect(content).toBeInTheDocument()
    })
})
