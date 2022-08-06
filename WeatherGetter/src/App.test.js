import { render } from '@testing-library/react'
import App from './App'

it('should have a background image', ()=>{
    const { getByTestId } = render(<App/>)

    expect(getByTestId("bg")).toHaveStyle('background-image: url("./src/assets/bg.jpg)"')
})