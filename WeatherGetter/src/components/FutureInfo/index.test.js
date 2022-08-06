import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import { FutureInfo } from './index'

it('should change temperature type when clicked', () => {
    const { getAllByRole, getAllByText } = render(<FutureInfo />)

    const tempButton = getAllByRole('button')

    userEvent.click(tempButton);
    
    expect(getAllByText(/°F/)).toBeTruthy()

});