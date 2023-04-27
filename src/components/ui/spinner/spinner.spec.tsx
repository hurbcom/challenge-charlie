import { render } from '@config/tests/render'
import { Spinner } from './spinner.styles'

describe('Spinner component', () => {
    it('should render correctly', () => {
        const { container } = render(<Spinner />)
        expect(container.firstChild).toBeInTheDocument()
    })

    it('should have the correct size', () => {
        const size = 36
        const { container } = render(<Spinner size={size} />)
        expect(container.firstChild).toHaveStyle(`width: ${size}px;`)
        expect(container.firstChild).toHaveStyle(`height: ${size}px;`)
    })

    it('should have the correct color', () => {
        const color = 'red'
        const { container } = render(<Spinner color={color} />)
        expect(container.firstChild).toHaveStyle(`border-left-color: ${color};`)
    })
})
