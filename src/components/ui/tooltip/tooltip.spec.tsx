import { render } from '@config/tests/render'
import { fireEvent, screen } from '@testing-library/react'
import { Tooltip } from './tooltip.comp'

describe('Tooltip', () => {
    it('should show tooltip on mouse hover', () => {
        const text = 'Hello World'
        render(
            <Tooltip text={text}>
                <div>Hover me</div>
            </Tooltip>
        )

        const element = screen.getByText('Hover me')

        fireEvent.mouseEnter(element)

        const tooltip = screen.getByText(text)
        expect(tooltip).toBeInTheDocument()

        fireEvent.mouseLeave(element)

        expect(screen.queryByText(text)).not.toBeInTheDocument()
    })
})
