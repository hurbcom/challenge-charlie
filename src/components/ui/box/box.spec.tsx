import { render } from '@config/tests/render'
import { screen } from '@testing-library/react'
import { Box } from './box.styles'

describe('Box component', () => {
    it('should render with default props', () => {
        render(<Box data-testid="box" />)
        expect(screen.getByTestId('box')).toHaveStyle(`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 0;
      margin-left: 0;
      margin-top: 0;
      margin-right: 0;
      margin-bottom: 0;
    `)
    })

    it('should render with custom props', () => {
        render(
            <Box
                direction="column"
                width={300}
                height={200}
                justifyContent="center"
                alignItems="center"
                padding={10}
                marginLeft={30}
                marginTop={40}
                marginRight={50}
                marginBottom={60}
                background="red"
                maxWidth={600}
                position="relative"
                data-testid="box"
            />
        )
        expect(screen.getByTestId('box')).toHaveStyle(`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 300px;
            height: 200px;
            padding: 10px;
            margin-left: 30px;
            margin-top: 40px;
            margin-right: 50px;
            margin-bottom: 60px;
            background: red;
            max-width: 600px;
            position: relative;
        `)
    })
})
