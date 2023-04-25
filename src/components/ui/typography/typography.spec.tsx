import { screen } from '@testing-library/react'
import { Typography } from './typography.styles'
import { lightTheme as theme } from '@styles/themes/light-theme'
import { render } from '@config/tests/render'

describe('Typography', () => {
    it('should render correctly with default props', () => {
        render(<Typography>Default text</Typography>)

        expect(screen.getByText('Default text')).toBeInTheDocument()
        expect(screen.getByText('Default text')).toHaveStyle(`
            color: ${theme.typography.colors.secondary};
            font-size: ${theme.typography.sizes.body};
            font-family: ${theme.typography.fontFamily};
            font-weight: ${theme.typography.weights.normal};
        `)
    })

    it('should render with title variant', () => {
        render(<Typography variant="title">Title text</Typography>)

        expect(screen.getByText('Title text')).toBeInTheDocument()
        expect(screen.getByText('Title text')).toHaveStyle(`
            color: ${theme.typography.colors.primary};
            font-size: ${theme.typography.sizes.title};
            font-family: ${theme.typography.fontFamily};
            font-weight: ${theme.typography.weights.bold};
        `)
    })

    it('should render with custom color and weight', () => {
        render(
            <Typography color="#f00" weight="light">
                Custom text
            </Typography>
        )

        expect(screen.getByText('Custom text')).toBeInTheDocument()
        expect(screen.getByText('Custom text')).toHaveStyle(`
            color: #f00;
            font-size: ${theme.typography.sizes.body};
            font-family: ${theme.typography.fontFamily};
            font-weight: ${theme.typography.weights.light};
        `)
    })

    it('should render with padding', () => {
        render(<Typography padding={16}>Padded text</Typography>)

        expect(screen.getByText('Padded text')).toBeInTheDocument()
        expect(screen.getByText('Padded text')).toHaveStyle(`
            color: ${theme.typography.colors.secondary};
            font-size: ${theme.typography.sizes.body};
            font-family: ${theme.typography.fontFamily};
            font-weight: ${theme.typography.weights.normal};
            padding: 16px;
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 16px;
            padding-bottom: 16px;
        `)
    })
})
