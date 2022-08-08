import { render } from '@testing-library/react'
import App from './App'


describe('The "App" component', ()=>{
    it('should have a background image', ()=>{
        const { getByTestId } = render(<App/>)
    
        expect(getByTestId("bg")).toHaveStyle('background-image: url("./src/assets/bg.jpg)"')
    })
})
