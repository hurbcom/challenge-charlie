import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import { FutureInfo } from './index'

describe('The "Tomorrow" and "After Tomorrow" section', ()=>{
    it('should change temperature type when clicked', () => {
        const { getAllByRole, getAllByText } = render(<FutureInfo />)
    
        const tempButton = getAllByRole('button')
    
        userEvent.click(tempButton)
    
        expect(getAllByText(/°F/)).toBeTruthy()
    
    });

    it('should change background color when temperature changes', ()=>{
        
    })
})