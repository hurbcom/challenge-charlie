import { render } from '@config/tests/render'
import { fireEvent, screen } from '@testing-library/react'
import { Select } from './select.comp'

const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
]

describe('Select component', () => {
    test('renders with the correct options', () => {
        render(
            <Select options={options} onSelect={() => {}} defaultValue="1" />
        )

        expect(screen.getByText('Option 1')).toBeInTheDocument()
        expect(screen.getByText('Option 2')).toBeInTheDocument()
        expect(screen.getByText('Option 3')).toBeInTheDocument()
    })

    test('calls onSelect with the selected option', () => {
        const onSelect = jest.fn()
        render(
            <Select options={options} onSelect={onSelect} defaultValue="1" />
        )

        fireEvent.change(screen.getByTestId('select'), {
            target: { value: '2' },
        })
        expect(onSelect).toHaveBeenCalledTimes(1)
        expect(onSelect).toHaveBeenCalledWith('2')
    })
})
