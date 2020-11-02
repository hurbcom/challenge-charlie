import { fireEvent, render, screen } from '@testing-library/react'

import SearchBar from '.'

describe('<SearchBar />', () => {
  it('should render the SearchBar', () => {
    const { container } = render(<SearchBar />)
    expect(screen.getByPlaceholderText('buscar')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should get the Weather when press enter', () => {
    const { container } = render(<SearchBar />)
    fireEvent.keyDown(container, { key: 'Enter', code: 'Enter' })
    expect(container.firstChild).toMatchSnapshot()
  })
})
